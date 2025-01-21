"use client";
// import { scan } from "react-scan"; // import this BEFORE react
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { useState } from "react";
import { Categories, WordNode } from "./types";
import { canMerge } from "./canMerge";
import { mergeWords } from "./mergeWords";
import { TooltipProvider } from "@/components/ui/tooltip";
import Popover from "./Popover";
import WordTabs from "./WordTabs";
import PartsTooltip from "./PartsTooltip";
import dynamic from "next/dynamic";
import EnglishTooltip from "./EnglishTooltip";

const WordBlock = dynamic(() => import("./WordBlock"), {
  ssr: false
});
const Canvas = dynamic(() => import("./Canvas"), {
  ssr: false
});

type Popover = {
  words: WordNode[];
  position: { x: number; y: number };
};

export default function Home() {
  const { toast } = useToast();
  const [canvasWords, setCanvasWords] = useState<WordNode[]>([]);
  const [popover, setPopover] = useState<Popover | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active, delta } = event;
    let draggedWord = active.data.current as WordNode;
    const droppedWord = over?.data.current as WordNode;

    if (over && (over.id as string).split("-")[0] === "wordtab") {
      // Remove the dragged word from the canvas
      setCanvasWords((oldWords) =>
        oldWords.filter((word) => word.id !== draggedWord.id)
      );
      return;
    }
    if (over?.id === "canvas") {
      if (draggedWord.isOnCanvas) {
        // Move the dragged word to the new position
        setCanvasWords((oldWords) =>
          oldWords.map((word) =>
            word.id === draggedWord.id
              ? {
                  ...word,
                  position: {
                    x: draggedWord.position.x + delta.x,
                    y: draggedWord.position.y + delta.y
                  }
                }
              : word
          )
        );
      } else {
        if (!activeWord) return;
        // Add the dragged word to the canvas
        setCanvasWords((oldWords) =>
          oldWords.concat({
            ...activeWord,
            position: {
              x: activeWord.position.x + delta.x - 400,
              y: activeWord.position.y + delta.y - 150
            },
            id: activeWord.base + Date.now(),
            isOnCanvas: true
          })
        );
        setactiveWord(null);
      }
      return;
    }

    if (droppedWord?.isOnCanvas) {
      if (activeWord) draggedWord = activeWord;
      if (droppedWord.id === draggedWord.id) return;
      // Attempt to merge the dragged word with the word it was dropped on
      if (
        draggedWord.category === Categories.NOUN &&
        droppedWord.category === Categories.NOUN
      ) {
        setPopover({
          words: [draggedWord, droppedWord],
          position: {
            x: droppedWord.position.x + 200,
            y: droppedWord.position.y - 50
          }
        });
        setCanvasWords((oldWords) =>
          oldWords
            .filter((word) => word.id !== draggedWord.id)
            .concat({
              ...draggedWord,
              position: {
                x: droppedWord.position.x + 100,
                y: droppedWord.position.y
              }
            })
        );
        setactiveWord(null);
        return;
      }

      if (!canMerge(draggedWord, droppedWord, toast)) return;

      const newWords = mergeWords(
        {
          ...draggedWord,
          position: {
            x: droppedWord.position.x,
            y: droppedWord.position.y
          }
        },
        droppedWord,
        canvasWords
      );
      setCanvasWords(newWords);
      setactiveWord(null);
    }
  }

  function handlePopoverChoice(event: React.MouseEvent<HTMLButtonElement>) {
    if (!popover) return;
    if (!event.target) return;
    const newWords = mergeWords(
      popover.words[0],
      popover.words[1],
      canvasWords,
      (event.target as HTMLElement).innerText
    );
    setCanvasWords(newWords);
  }

  const [activeWord, setactiveWord] = useState<WordNode | null>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <main
        className="flex flex-row min-h-screen py-2"
        onClick={() => setPopover(null)} // TODO: create a backdrop component to handle this
      >
        {popover && (
          <Popover
            position={popover.position}
            words={popover.words}
            onChoice={handlePopoverChoice}
          />
        )}
        <DndContext
          onDragStart={({ active, activatorEvent }) => {
            if ((activatorEvent as MouseEvent).screenX < 200)
              setactiveWord({
                ...(active.data.current as WordNode),
                position: {
                  x: (activatorEvent as MouseEvent).screenX,
                  y: (activatorEvent as MouseEvent).screenY
                }
              });
          }}
          onDragEnd={handleDragEnd}
        >
          <WordTabs />
          <Canvas>
            {canvasWords.map((word) => (
              <div key={word.id}>
                {word.parts.length > 0 ? (
                  <PartsTooltip
                    word={word}
                    onRightClick={() => {
                      setCanvasWords((oldWords) =>
                        oldWords
                          .filter((w) => w.id !== word.id)
                          .concat(
                            word.parts.map((part, i) => ({
                              ...part,
                              position: {
                                x: word.position.x + 100 * i,
                                y: word.position.y
                              },
                              id: part.base + Date.now() + i, // add i to make the id unique
                              isOnCanvas: true
                            }))
                          )
                      );
                    }}
                  />
                ) : (
                  <EnglishTooltip word={word} />
                )}
              </div>
            ))}
          </Canvas>
          <DragOverlay>
            {activeWord && (
              <WordBlock
                styleOverride={{
                  position: "fixed",
                  transform: "none",
                  left: "unset",
                  top: "unset",
                  zIndex: 999
                }}
                word={activeWord}
                id="active-word"
              >
                {activeWord.base}
              </WordBlock>
            )}
          </DragOverlay>
        </DndContext>
        <Toaster />
      </main>
    </TooltipProvider>
  );
}

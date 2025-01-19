import { Categories, Category } from "./types";

const definiteSpreadObj = {
  color: Category.DEFINITE.color,
  category: Categories.DEFINITE,
  hide: false,
  parts: []
};
const nounSpreadObj = {
  color: Category.NOUN.color,
  category: Categories.NOUN,
  hide: false,
  parts: []
};
const proNounSpreadObj = {
  color: Category.PRONOUN.color,
  category: Categories.PRONOUN,
  hide: false,
  parts: []
};
const particleSpreadObj = {
  color: Category.PARTICLE.color,
  category: Categories.PARTICLE,
  hide: false,
  parts: []
};
const verbSpreadObj = {
  color: Category.VERB.color,
  category: Categories.VERB,
  hide: false,
  parts: []
};

export const WORDS_DATA = [
  {
    ...nounSpreadObj,
    base: "كتاب",
    isOnCanvas: false,
    english: ["Book"],
    position: {
      x: 50,
      y: 300
    },
    id: "كتاب"
  },
  {
    ...nounSpreadObj,
    base: "بيت",
    isOnCanvas: false,
    english: ["House"],
    position: {
      x: 50,
      y: 200
    },
    id: "بيت"
  },
  {
    ...proNounSpreadObj,
    base: "هُوَ",
    isOnCanvas: false,
    english: ["He"],
    // the attached forms
    forms: {
      nominative: "هُوَ",
      accusative: "هُ",
      genitive: "هُ",
      special: "هِ"
    },
    position: {
      x: 50,
      y: 400
    },
    id: "هُوَ"
  },
  {
    ...proNounSpreadObj,
    base: "هُمَاْ",
    isOnCanvas: false,
    english: ["They (2)"],
    forms: {
      nominative: "هُمَاْ",
      accusative: "هُمَاْ",
      genitive: "هُمَاْ",
      special: "هِمَاْ"
    },
    position: {
      x: 50,
      y: 500
    },
    id: "هُمَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "هُمْ",
    isOnCanvas: false,
    english: ["They (3+)"],
    forms: {
      nominative: "هُمْ",
      accusative: "هُمْ",
      genitive: "هُمْ",
      special: "هِمْ"
    },
    position: {
      x: 50,
      y: 600
    },
    id: "هُمْ"
  },
  {
    ...proNounSpreadObj,
    base: "هِيَ",
    isOnCanvas: false,
    english: ["She"],
    forms: {
      nominative: "هِيَ",
      accusative: "هَا",
      genitive: "هَا"
    },
    position: {
      x: 50,
      y: 700
    },
    id: "هِيَ"
  },
  {
    ...proNounSpreadObj,
    base: "هُنَّ",
    isOnCanvas: false,
    english: ["They (3+)"],
    forms: {
      nominative: "هُنَّ",
      accusative: "هُنَّ",
      genitive: "هُنَّ",
      special: "هِنَّ"
    },
    position: {
      x: 50,
      y: 800
    },
    id: "هُنَّ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتَ",
    isOnCanvas: false,
    english: ["You"],
    forms: {
      nominative: "أَنْتَ",
      accusative: "كَ",
      genitive: "كَ"
    },
    position: {
      x: 50,
      y: 900
    },
    id: "أَنْتَ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُمَاْ",
    isOnCanvas: false,
    english: ["You (2)"],
    forms: {
      nominative: "أَنْتُمَاْ",
      accusative: "كُمَاْ",
      genitive: "كُمَاْ"
    },
    position: {
      x: 50,
      y: 1000
    },
    id: "أَنْتُمَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُمْ",
    isOnCanvas: false,
    english: ["You (3+)"],
    forms: {
      nominative: "أَنْتُمْ",
      accusative: "كُمْ",
      genitive: "كُمْ"
    },
    position: {
      x: 50,
      y: 1100
    },
    id: "أَنْتُمْ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتِ",
    isOnCanvas: false,
    english: ["You"],
    forms: {
      nominative: "أَنْتِ",
      accusative: "كِ",
      genitive: "كِ"
    },
    position: {
      x: 50,
      y: 1200
    },
    id: "أَنْتِ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُنَّ",
    isOnCanvas: false,
    english: ["You (3+)"],
    forms: {
      nominative: "أَنْتُنَّ",
      accusative: "كُنَّ",
      genitive: "كُنَّ"
    },
    position: {
      x: 50,
      y: 1300
    },
    id: "أَنْتُنَّ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنَاْ",
    isOnCanvas: false,
    english: ["I"],
    forms: {
      nominative: "أَنَاْ",
      accusative: "يْ",
      genitive: "يْ"
    },
    position: {
      x: 50,
      y: 1400
    },
    id: "أَنَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "نَحْنُ",
    isOnCanvas: false,
    english: ["We"],
    forms: {
      nominative: "نَحْنُ",
      accusative: "نَاْ",
      genitive: "نَاْ"
    },
    position: {
      x: 50,
      y: 1500
    },
    id: "نَحْنُ"
  },
  {
    ...particleSpreadObj,
    base: "فيْ",
    isOnCanvas: false,
    english: ["In"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 100
    },
    id: "فيْ"
  },
  {
    ...particleSpreadObj,
    base: "علىْ",
    isOnCanvas: false,
    english: ["On"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 200
    },
    id: "علىْ"
  },
  {
    ...particleSpreadObj,
    base: "مِنْ",
    isOnCanvas: false,
    english: ["From"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 300
    },
    id: "مِنْ"
  },
  {
    ...particleSpreadObj,
    base: "إنَّ",
    isOnCanvas: false,
    english: ["Certainly"],
    effects: ["accusative"],
    position: {
      x: 50,
      y: 400
    },
    id: "إنَّ"
  },
  {
    ...particleSpreadObj,
    base: "وَ",
    isOnCanvas: false,
    english: ["And", "By"],
    effects: ["nominative", "genitive"],
    position: {
      x: 50,
      y: 500
    },
    id: "وَ"
  },
  {
    ...particleSpreadObj,
    base: "لَيْسَ",
    isOnCanvas: false,
    english: ["Perhaps"],
    effects: ["accusative"],
    position: {
      x: 50,
      y: 600
    },
    id: "لَيْسَ"
  },
  {
    ...particleSpreadObj,
    base: "لِ",
    isOnCanvas: false,
    english: ["For"],
    effects: ["genitive"],
    special: "لَ",
    position: {
      x: 50,
      y: 700
    },
    id: "لِ"
  },
  {
    ...particleSpreadObj,
    base: "بِ",
    isOnCanvas: false,
    english: ["With"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 800
    },
    id: "بِ"
  },
  {
    ...particleSpreadObj,
    base: "عَنْ",
    isOnCanvas: false,
    english: ["About"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 900
    },
    id: "عَنْ"
  },
  {
    ...particleSpreadObj,
    base: "مَعَ",
    isOnCanvas: false,
    english: ["With"],
    effects: ["genitive"],
    position: {
      x: 50,
      y: 1000
    },
    id: "مَعَ"
  },
  {
    ...definiteSpreadObj,
    base: "ال",
    isOnCanvas: false,
    english: ["The"],
    position: {
      x: 50,
      y: 100
    },
    id: "ال"
  },
  {
    ...verbSpreadObj,
    base: "ذهب",
    isOnCanvas: false,
    english: ["Went"],
    position: {
      x: 50,
      y: 100
    },
    id: "ذهب"
  },
  {
    ...verbSpreadObj,
    base: "قرأ",
    isOnCanvas: false,
    english: ["Read"],
    position: {
      x: 50,
      y: 200
    },
    id: "قرأ"
  }
];

// ASCII for the Arabic vowels for easy access
export const ARABIC_VOWELS = {
  fatha: "َ",
  damma: "ُ",
  kasra: "ِ",
  shadda: "ّ",
  sukun: "ْ",
  kasratain: "ٍ"
};

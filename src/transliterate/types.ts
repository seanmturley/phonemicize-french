export type LetterTransliterationArgs = {
  word: string;
  pos?: string;
  index: number;
};

export type LetterTransliteration = [
  newTransliteration: string,
  newIndex: number
];

export type LetterTransliterationArgs = {
  word: string;
  pos?: string;
  index: number;
};

export type LetterTransliteration = [
  newTransliteration: string,
  newIndex: number
];

type TransliterationTestDatum = {
  ipa: string;
  word: string;
  pos?: string;
};

export type TransliterationTestData = {
  [key: string]: TransliterationTestDatum;
};

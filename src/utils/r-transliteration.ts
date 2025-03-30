import type { LetterTransliteration } from "./transliteration-types.ts";

export default function rTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^rr/i.test(remainingWord)) {
    // medial rr should should be /ʁ/
    newTransliteration = "ʁ";
    numTransliteratedCharacters = 2;
  } else if (/^r/i.test(remainingWord)) {
    // initial or medial r should be /ʁ/
    newTransliteration = "ʁ";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

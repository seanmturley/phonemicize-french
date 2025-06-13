import type { LetterTransliteration } from "../transliteration-types.ts";

export default function mTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^mm/i.test(remainingWord)) {
    // mm should be /m/
    newTransliteration = "m";
    numTransliteratedCharacters = 2;
  } else {
    // m should be /m/
    newTransliteration = "m";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

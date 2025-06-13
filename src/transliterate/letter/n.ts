import type { LetterTransliteration } from "../types.ts";

export default function nTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^nn/i.test(remainingWord)) {
    // nn should be /n/
    newTransliteration = "n";
    numTransliteratedCharacters = 2;
  } else {
    // n should be /n/
    newTransliteration = "n";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

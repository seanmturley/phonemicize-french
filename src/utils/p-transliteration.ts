import type { LetterTransliteration } from "./transliteration-types.ts";

export default function pTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/p$/i.test(remainingWord)) {
    // final p should be silent
    newTransliteration = "";
  } else if (/^ph/i.test(remainingWord)) {
    // ph should be /f/
    newTransliteration = "f";
    numTransliteratedCharacters = 2;
  } else if (/^pp/i.test(remainingWord)) {
    // pp should be /p/
    newTransliteration = "p";
    numTransliteratedCharacters = 2;
  } else {
    // p should be /p/
    newTransliteration = "p";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

import type { LetterTransliteration } from "./transliteration-types.ts";

export default function eTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^eil$/i.test(remainingWord)) {
    // final eil should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 3;
  } else if (/^euil$/i.test(remainingWord)) {
    // final euil should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 4;
  } else if (/^eill/i.test(remainingWord)) {
    // eill should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 4;
  } else if (/^euill/i.test(remainingWord)) {
    // euill should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 5;
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

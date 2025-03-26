import type { LetterTransliteration } from "./transliteration-types.ts";

export default function lTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ll/i.test(remainingWord)) {
    // ll should be [l]
    newTransliteration = "l";
    numTransliteratedCharacters = 2;
  } else {
    // l should be [l]
    newTransliteration = "l";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

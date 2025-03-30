import type { LetterTransliteration } from "./transliteration-types.ts";

export default function dTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/d$/i.test(remainingWord)) {
    // final d should be /t/ in liaison, but otherwise silent
    newTransliteration = "(t)";
  } else if (/^dd/i.test(remainingWord)) {
    // initial or medial dd should be /d/
    newTransliteration = "d";
    numTransliteratedCharacters = 2;
  } else {
    // initial or medial d should be /d/
    newTransliteration = "d";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

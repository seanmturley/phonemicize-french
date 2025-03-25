import type { LetterTransliteration } from "./transliteration-types.ts";

export default function bTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/b$/i.test(remainingWord)) {
    // final b should be silent
    newTransliteration = "";
  } else if (/^bb/i.test(remainingWord)) {
    // initial or medial bb should be [b]
    newTransliteration = "b";
    numTransliteratedCharacters = 2;
  } else if (/^b[st]/i.test(remainingWord)) {
    // b followed by -s or -t should be [p]
    newTransliteration = "p";
  } else {
    // initial or medial b should be [b]
    newTransliteration = "b";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

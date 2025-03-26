import type { LetterTransliteration } from "./transliteration-types.ts";

export default function tTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/t$/i.test(remainingWord)) {
    // final t should be [t] in liaison, but otherwise silent
    newTransliteration = "(t)";
  } else if (/^th/i.test(remainingWord)) {
    // initial or medial tt should be [t]
    newTransliteration = "t";
    numTransliteratedCharacters = 2;
  } else if (/tion$/i.test(remainingWord)) {
    // the ending tion should be [sjɔ̃]
    newTransliteration = "sjɔ̃";
    numTransliteratedCharacters = 4;
  } else if (/tience$/i.test(remainingWord)) {
    // the ending tience should be [sjɑ̃s]
    newTransliteration = "sjɑ̃s";
    numTransliteratedCharacters = 6;
  } else if (/^tt/i.test(remainingWord)) {
    // initial or medial tt should be [t]
    newTransliteration = "t";
    numTransliteratedCharacters = 2;
  } else {
    // initial or medial t should be [t]
    newTransliteration = "t";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

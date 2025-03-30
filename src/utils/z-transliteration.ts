import type { LetterTransliteration } from "./transliteration-types.ts";

export default function zTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";

  if (/z$/i.test(remainingWord)) {
    // final z should be /z/ in liaison, but otherwise silent
    // Note exceptions, generally loan words or proper nouns
    // - see test for details
    newTransliteration = "(z)";
  } else {
    // initial or medial z should be /z/
    newTransliteration = "z";
  }

  const newIndex = index + 1;

  return [newTransliteration, newIndex];
}

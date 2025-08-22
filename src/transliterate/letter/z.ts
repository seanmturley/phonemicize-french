import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function zTransliteration({
  word,
  posArray,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";

  if (/^z$/i.test(remainingWord) && posArray?.includes("nom propre")) {
    // final z should be pronounced for proper nouns by default
    newTransliteration = "z";
  } else if (/^z$/i.test(remainingWord)) {
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

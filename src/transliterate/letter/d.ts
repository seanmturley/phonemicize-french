import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function dTransliteration({
  word,
  posArray,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^d$/i.test(remainingWord) && posArray?.includes("nom propre")) {
    // final d should be silent for proper nouns
    newTransliteration = "";
  } else if (
    /^d$/i.test(remainingWord) &&
    posArray?.includes("nom commun") &&
    posArray?.includes("singulier")
  ) {
    // final d should be silent for singular nouns
    newTransliteration = "";
  } else if (/^d$/i.test(remainingWord)) {
    // otherwise final d should be /t/ in liaison, but otherwise silent
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

import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function fTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ff/i.test(remainingWord)) {
    // initial or medial ff should be /f/
    newTransliteration = "f";
    numTransliteratedCharacters = 2;
  } else {
    // initial, medial, or final f should be /f/
    // Note exceptions for final f - see test for details
    newTransliteration = "f";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

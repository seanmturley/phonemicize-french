import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function rTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^rr/i.test(remainingWord)) {
    // medial rr should should be /ʁ/
    newTransliteration = "ʁ";
    numTransliteratedCharacters = 2;
  } else if (/^r/i.test(remainingWord)) {
    // otherwise r should be /ʁ/
    newTransliteration = "ʁ";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

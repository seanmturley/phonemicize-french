import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function mTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^mm/i.test(remainingWord)) {
    // mm should be /m/
    newTransliteration = "m";
    numTransliteratedCharacters = 2;
  } else {
    // m should be /m/
    newTransliteration = "m";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

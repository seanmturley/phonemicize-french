import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function qTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^q$/i.test(remainingWord)) {
    // final q should be /k/
    newTransliteration = "k";
  } else if (/^qu/i.test(remainingWord)) {
    // qu should be /k/
    newTransliteration = "k";
    numTransliteratedCharacters = 2;
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

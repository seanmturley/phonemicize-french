import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function lTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ll/i.test(remainingWord)) {
    // ll should be /l/
    newTransliteration = "l";
    numTransliteratedCharacters = 2;
  } else {
    // l should be /l/
    newTransliteration = "l";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

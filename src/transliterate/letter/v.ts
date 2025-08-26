import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function vTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/ville$/i.test(remainingWord)) {
    // final ville should be /vil(ə)/
    newTransliteration = "vil(ə)";
    numTransliteratedCharacters = 5;
  } else {
    newTransliteration = "v";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

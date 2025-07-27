import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function vTransliteration({
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const newIndex = index + 1;

  return ["v", newIndex];
}

import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function jTransliteration({
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const newIndex = index + 1;

  return ["ʒ", newIndex];
}

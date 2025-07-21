import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function kTransliteration({
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const newIndex = index + 1;

  return ["k", newIndex];
}

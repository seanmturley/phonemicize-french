import type { LetterTransliteration } from "../types.ts";

export default function jTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const newIndex = index + 1;

  return ["ʒ", newIndex];
}

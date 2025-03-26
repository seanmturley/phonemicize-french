import type { LetterTransliteration } from "./transliteration-types.ts";

export default function kTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const newIndex = index + 1;

  return ["k", newIndex];
}

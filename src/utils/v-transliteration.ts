import type { LetterTransliteration } from "./transliteration-types.ts";

export default function vTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const newIndex = index + 1;

  return ["v", newIndex];
}

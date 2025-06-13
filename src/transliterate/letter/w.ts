import type { LetterTransliteration } from "../types.ts";

export default function wTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const newIndex = index + 1;

  // Note "clown" as an exception, rendered as /klun/
  return ["w", newIndex];
}

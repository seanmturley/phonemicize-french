import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function wTransliteration({
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const newIndex = index + 1;

  // Note "clown" as an exception, rendered as /klun/
  return ["w", newIndex];
}

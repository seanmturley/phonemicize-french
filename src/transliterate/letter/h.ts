import { sometimesAspirated, alwaysAspirated } from "./h-aspirated.ts";
import type { LetterTransliteration } from "../types.ts";

export default function hTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  let newTransliteration = "";

  if (sometimesAspirated.has(word)) {
    // Handles exceptions for words that can have either aspirated or
    // mute h
    newTransliteration = "(h)";
  } else if (alwaysAspirated.has(word)) {
    // h 'aspiré', should be silent and not allow liaison or elision
    newTransliteration = "h";
  } else if (/^h/i.test(word)) {
    // h 'muet' or medial should be silent
    newTransliteration = "";
  }

  const newIndex = index + 1;

  return [newTransliteration, newIndex];
}

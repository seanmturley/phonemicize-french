import { sometimesAspirated, alwaysAspirated } from "./h-aspirated.ts";

export default function hTransliteration(latin: string) {
  let newTransliteration = "";

  if (sometimesAspirated.has(latin)) {
    // Handles exceptions for words that can have either aspirated or
    // mute h
    newTransliteration = "(h)";
  } else if (alwaysAspirated.has(latin)) {
    // h 'aspiré', should be silent and not allow liaison or elision
    newTransliteration = "h";
  } else if (/^h/i.test(latin)) {
    // h 'muet' or medial should be silent
    newTransliteration = "";
  }

  const newLatin = latin.substring(1);

  return [newLatin, newTransliteration];
}

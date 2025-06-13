import {
  consonant,
  consonantExcludingMNH,
  silentFinalConsonant,
  vowel
} from "../letter-group-definitions.ts";
import type { LetterTransliteration } from "../types.ts";

export default function oTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ô/i.test(remainingWord)) {
    // ô should be /o/
    newTransliteration = "o";
  } else if (
    new RegExp(String.raw`^œu[${silentFinalConsonant}]?$`, "i").test(
      remainingWord
    )
  ) {
    // œ followed by u as a final sound should be /ø/
    newTransliteration = "ø";
    numTransliteratedCharacters = 2;
  } else if (/^œu/i.test(remainingWord)) {
    // œ followed by u in the interior of a word should be /œ/
    newTransliteration = "œ";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^oeu[${silentFinalConsonant}]?$`, "i").test(
      remainingWord
    )
  ) {
    // oe followed by u as a final sound should be /ø/
    newTransliteration = "ø";
    numTransliteratedCharacters = 3;
  } else if (/^oeu/i.test(remainingWord)) {
    // oe followed by u in the interior of a word should be /œ/
    newTransliteration = "œ";
    numTransliteratedCharacters = 3;
  } else if (/^œil$/i.test(remainingWord)) {
    // œ final followed by il should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 3;
  } else if (/^oeil$/i.test(remainingWord)) {
    // oe final followed by il should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 4;
  } else if (/^œill/i.test(remainingWord)) {
    // œ followed by ill should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 4;
  } else if (/^oeill/i.test(remainingWord)) {
    // oe followed by ill should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 5;
  } else if (/^œ/i.test(remainingWord)) {
    // œ otherwise should be /e/
    newTransliteration = "e";
  } else if (/^oin$/i.test(remainingWord)) {
    // oi final followed by n should be /wɛ̃/
    newTransliteration = "wɛ̃";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^oin[${consonant}]`, "i").test(remainingWord)
  ) {
    // oi followed by n before a consonant should be /wɛ̃/
    newTransliteration = "wɛ̃";
    numTransliteratedCharacters = 3;
  } else if (word.charAt(index - 1) === "r" && /^oi/i.test(remainingWord)) {
    // oi after r should be /wɑ/
    newTransliteration = "wɑ";
    numTransliteratedCharacters = 2;
  } else if (/^oi/i.test(remainingWord)) {
    // oi otherwise should be /wa/
    newTransliteration = "wa";
    numTransliteratedCharacters = 2;
  } else if (word.charAt(index - 1) === "r" && /^oy/i.test(remainingWord)) {
    // oy after r should be /wɑj/
    newTransliteration = "wɑj";
    numTransliteratedCharacters = 2;
  } else if (/^oy/i.test(remainingWord)) {
    // oy should be /waj/
    newTransliteration = "waj";
    numTransliteratedCharacters = 2;
  } else if (/^o[mn]$/i.test(remainingWord)) {
    // final om or on should be /ɔ̃/
    newTransliteration = "ɔ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^o[mn][${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h om and on should be /ɔ̃/
    newTransliteration = "ɔ̃";
    numTransliteratedCharacters = 2;
  } else if (/^ouill/i.test(remainingWord)) {
    // ouill should be /uj/
    newTransliteration = "uj";
    numTransliteratedCharacters = 5;
  } else if (/^ouil$/i.test(remainingWord)) {
    // ouill should be /uj/
    newTransliteration = "uj";
    numTransliteratedCharacters = 4;
  } else if (/^ou([ia]|e([rt]|st))/i.test(remainingWord)) {
    // ou followed by a pronounced vowel should be /w/
    newTransliteration = "w";
    numTransliteratedCharacters = 2;
  } else if (/^o[uùû]/i.test(remainingWord)) {
    // ou otherwise, où, and oû should be /u/
    newTransliteration = "u";
    numTransliteratedCharacters = 2;
  } else if (/^o$/i.test(remainingWord)) {
    // o when the final phoneme should be /o/ as when final
    newTransliteration = "o";
  } else if (
    new RegExp(String.raw`^o[${silentFinalConsonant}]$`, "i").test(
      remainingWord
    )
  ) {
    // o when the final phoneme should be /o/ as when before a silent letter
    newTransliteration = "o";
  } else if (new RegExp(String.raw`^os[${vowel}]$`, "i").test(remainingWord)) {
    // o before s pronounced as /z/ should be /o/
    newTransliteration = "o";
  } else {
    // otherwise o should be /ɔ/
    newTransliteration = "ɔ";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

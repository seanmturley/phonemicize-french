import type { LetterTransliteration } from "./transliteration-types.ts";

import {
  backVowel,
  consonant,
  frontVowel,
  vowel
} from "./letter-group-definitions.ts";

export default function sTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/s$/i.test(remainingWord)) {
    // final s should be /z/ in liaison, but otherwise silent
    // Note exceptions e.g. hélas, lis, fils
    newTransliteration = "(z)";
  } else if (/^ss/i.test(remainingWord)) {
    // ss should be /s/
    newTransliteration = "s";
    numTransliteratedCharacters = 2;
  } else if (/^sch/i.test(remainingWord)) {
    // sch should be /ʃ/
    newTransliteration = "ʃ";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^sc[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // sc before a front vowel should be /s/
    newTransliteration = "s";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^sc[${backVowel}|${consonant}]`, "i").test(
      remainingWord
    )
  ) {
    // sc before a back vowel or consonant should be /sk/
    newTransliteration = "sk";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^[${vowel}]s[${vowel}]`, "i").test(
      word.substring(index - 1)
    )
  ) {
    // single s between vowels should be /z/
    newTransliteration = "z";
  } else {
    // single s not between vowels should be /s/
    newTransliteration = "s";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

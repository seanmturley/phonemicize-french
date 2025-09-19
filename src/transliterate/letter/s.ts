import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

import {
  backVowel,
  consonant,
  frontVowel,
  vowel
} from "../letter-group-definitions.ts";

export default function sTransliteration({
  word,
  posArray,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);
  const remainingWordWithPreviousLetter = word.substring(index - 1);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^s$/i.test(remainingWord) && posArray?.includes("nom propre")) {
    // final s should be silent for proper nouns
    newTransliteration = "";
  } else if (
    /^s$/i.test(remainingWord) &&
    posArray?.includes("nom commun") &&
    posArray?.includes("singulier")
  ) {
    // final s should be silent for singular nouns
    newTransliteration = "";
  } else if (/^rs$/i.test(remainingWordWithPreviousLetter)) {
    // should be silent when following r
    newTransliteration = "";
  } else if (/^s$/i.test(remainingWord)) {
    // otherwise final s should be /z/ in liaison, but otherwise silent
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

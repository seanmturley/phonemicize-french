import {
  backVowel,
  consonant,
  frontVowel
} from "./letter-group-definitions.ts";

export default function sTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/s$/i.test(latin)) {
    // final s should be [z] in liaison, but otherwise silent
    // Note exceptions e.g. hélas, lis, fils
    newTransliteration = "(z)";
  } else if (/^ss/i.test(latin)) {
    // ss should be [s]
    newTransliteration = "s";
    numTransliteratedCharacters = 2;
  } else if (/^sch/i.test(latin)) {
    // sch should be [ʃ]
    newTransliteration = "ʃ";
    numTransliteratedCharacters = 3;
  } else if (new RegExp(String.raw`^sc[${frontVowel}]`, "i").test(latin)) {
    // sc before a front vowel should be [s]
    newTransliteration = "s";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^sc[${backVowel}|${consonant}]`, "i").test(latin)
  ) {
    // sc before a back vowel or consonant should be [sk]
    newTransliteration = "sk";
    numTransliteratedCharacters = 2;
  } else {
    // single s not between vowels should be [s]
    newTransliteration = "s";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

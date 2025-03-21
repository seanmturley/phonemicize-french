import { consonantExcludingH, vowel } from "./letter-group-definitions.ts";

export default function xTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/x$/i.test(latin)) {
    // final x should be [z] in liaison, but otherwise silent
    // Note exceptions for final x - see test for details
    newTransliteration = "(z)";
  } else if (/^xh/i.test(latin)) {
    // xh should be [gz]
    newTransliteration = "gz";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^x[${consonantExcludingH}]`, "i").test(latin)
  ) {
    // x before a consonant (excluding h) should be [ks]
    newTransliteration = "ks";
  } else if (new RegExp(String.raw`^x[${vowel}]`, "i").test(latin)) {
    // x before a vowel should be [gz]
    // Note exceptions for ordinal numbers - see test for details
    newTransliteration = "gz";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

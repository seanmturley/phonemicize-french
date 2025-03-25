import {
  backVowel,
  consonant,
  frontVowel
} from "./letter-group-definitions.ts";

export default function cTransliteration(
  latin: string,
  precedingLatin: string
) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (precedingLatin.slice(-1) === "n" && /c$/i.test(latin)) {
    // final c after n should silent
    newTransliteration = "";
  } else if (/c$/i.test(latin)) {
    // final c should be [k]
    newTransliteration = "k";
  } else if (/ct$/i.test(latin)) {
    // final ct should be [kt]
    newTransliteration = "kt";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^c[${frontVowel}]`, "i").test(latin)) {
    // before a front vowel c should should be [s]
    newTransliteration = "s";
  } else if (new RegExp(String.raw`^cc[${frontVowel}]`, "i").test(latin)) {
    // before a front vowel cc should should be [ks]
    newTransliteration = "ks";
    numTransliteratedCharacters = 2;
  } else if (/^ch/i.test(latin)) {
    // ch should be [ʃ]
    // Note exception for words of Greek origin pronounced [k]
    // e.g. Christ
    newTransliteration = "ʃ";
    numTransliteratedCharacters = 2;
  } else if (/^cqu/i.test(latin)) {
    // cqu should be [k]
    newTransliteration = "k";
    numTransliteratedCharacters = 3;
  } else if (/^ç/i.test(latin)) {
    // ç should be [s]
    newTransliteration = "s";
  } else if (
    new RegExp(String.raw`^cc[${backVowel}|${consonant}]`, "i").test(latin)
  ) {
    // before a back vowel or consonant cc should should be [k]
    newTransliteration = "k";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^c[${backVowel}|${consonant}]`, "i").test(latin)
  ) {
    // before a back vowel or consonant c should should be [k]
    newTransliteration = "k";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);
  const newPrecedingLatin = latin.substring(0, numTransliteratedCharacters);

  return [newLatin, newPrecedingLatin, newTransliteration];
}

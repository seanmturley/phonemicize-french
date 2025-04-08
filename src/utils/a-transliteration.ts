import { consonantExcludingMNH, vowel } from "./letter-group-definitions.ts";
import type { LetterTransliteration } from "./transliteration-types.ts";

export default function aTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^â/i.test(remainingWord)) {
    // â should be /ɑ/
    newTransliteration = "ɑ";
  } else if (/^an$/i.test(remainingWord)) {
    // when final, an should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (/^aon$/i.test(remainingWord)) {
    // when final, aon should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 3;
  } else if (/^aim$/i.test(remainingWord)) {
    // when final, aim should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 3;
  } else if (/^ain$/i.test(remainingWord)) {
    // when final, an should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^am[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant except m, m, or h, am should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^an[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant except m, m, or h, an should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^aim[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant except m, m, or h, aim should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^ain[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant except m, m, or h, ain should be /ɛ̃/
    newTransliteration = "ɛ̃";
    console.log(newTransliteration);
    numTransliteratedCharacters = 3;
  } else if (new RegExp(String.raw`^am[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel, am should be /am/
    newTransliteration = "am";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^an[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel, an should be /an/
    newTransliteration = "an";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^aim[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel, aim should be /ɛm/
    newTransliteration = "ɛm";
    numTransliteratedCharacters = 3;
  } else if (new RegExp(String.raw`^ain[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel, ain should be /ɛn/
    newTransliteration = "ɛn";
    numTransliteratedCharacters = 3;
  } else if (/^amm/i.test(remainingWord)) {
    // amm should be /am/
    newTransliteration = "am";
    numTransliteratedCharacters = 3;
  } else if (/^ann/i.test(remainingWord)) {
    // ann should be /an/
    newTransliteration = "an";
    numTransliteratedCharacters = 3;
  } else if (/^aur/i.test(remainingWord)) {
    // au before r should be /ɔ/
    newTransliteration = "ɔ";
    numTransliteratedCharacters = 2;
  } else if (/^au/i.test(remainingWord)) {
    // au otherwise should be /o/
    newTransliteration = "o";
    numTransliteratedCharacters = 2;
  } else if (/^ay/i.test(remainingWord)) {
    // ay should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 2;
  } else if (/^ai$/i.test(remainingWord)) {
    // final ai should be /e/
    newTransliteration = "e";
    numTransliteratedCharacters = 2;
  } else if (/^ais$/i.test(remainingWord)) {
    // final ais should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 3;
  } else if (/^ait$/i.test(remainingWord)) {
    // final ais should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 3;
  } else if (/^aient$/i.test(remainingWord)) {
    // final ais should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 5;
  } else if (/^aie/i.test(remainingWord)) {
    // aie should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 3;
  } else if (/^aill/i.test(remainingWord)) {
    // aill should be /aj/
    newTransliteration = "aj";
    numTransliteratedCharacters = 4;
  } else if (/^ail$/i.test(remainingWord)) {
    // final ail should be /aj/
    newTransliteration = "aj";
    numTransliteratedCharacters = 3;
  } else if (/^aî/i.test(remainingWord)) {
    // aî should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 2;
  } else if (/^ai/i.test(remainingWord)) {
    // ai should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 2;
  } else if (/^az$/i.test(remainingWord)) {
    // a before a /z/ sound should be /ɑ/ as when before final z
    // (pronounced in this case)
    newTransliteration = "ɑz";
    numTransliteratedCharacters = 2;
  } else if (/^az/i.test(remainingWord)) {
    // a before a /z/ sound should be /ɑ/ as when before medial z
    newTransliteration = "ɑ";
  } else if (new RegExp(String.raw`^as[${vowel}]`, "i").test(remainingWord)) {
    // a before a /z/ sound should be /ɑ/ as when before s
    // followed by a vowel
    newTransliteration = "ɑ";
  } else if (/^a/i.test(remainingWord)) {
    // a should be /a/
    newTransliteration = "a";
  } else if (/^à/i.test(remainingWord)) {
    // à should be /a/
    newTransliteration = "a";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

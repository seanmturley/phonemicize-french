import { consonantExcludingMNH, vowel } from "./letter-group-definitions.ts";
import type { LetterTransliteration } from "./transliteration-types.ts";

export default function uTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/um$/i.test(remainingWord)) {
    // final um should be /œ̃/
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (/un$/i.test(remainingWord)) {
    // un should be /œ̃/ (a final /n/ is implied in liaison)
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^um[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel um should be /ym/
    newTransliteration = "ym";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^un[${vowel}]`, "i").test(remainingWord)) {
    // before a vowel un should be /yn/
    newTransliteration = "yn";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^um[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h, um should be /œ̃/
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^un[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h, un should be /œ̃/
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (/^ue/i.test(remainingWord)) {
    // in all other cases ue should be /y/
    newTransliteration = "y";
    numTransliteratedCharacters = 2;
  } else if (/^ü/i.test(remainingWord)) {
    // in all other cases ü should be /y/
    newTransliteration = "y";
  } else if (/^û/i.test(remainingWord)) {
    // in all other cases û should be /y/
    newTransliteration = "y";
  } else if (/^u/i.test(remainingWord)) {
    // in all other cases u should be /y/
    newTransliteration = "y";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

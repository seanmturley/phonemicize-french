import {
  consonantExcludingMN,
  consonantExcludingMNH,
  vowel
} from "./letter-group-definitions.ts";
import type { LetterTransliteration } from "./transliteration-types.ts";

export default function yTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (index === 0 && /^y/i.test(remainingWord)) {
    // initial y should be [j]
    newTransliteration = "j";
  } else if (/ym$/i.test(remainingWord)) {
    // final ym should be [ɛ̃]
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^y[${consonantExcludingMN}]`, "i").test(remainingWord)
  ) {
    // y before a consonant excluding m and n should be [i]
    newTransliteration = "i";
  } else if (
    new RegExp(String.raw`^y[nm][${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h yn/ym should be [ɛ̃]
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^yn[${vowel}mnh]`, "i").test(remainingWord)
  ) {
    // before a vowel, m, n, or h yn should be [in]
    newTransliteration = "in";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^ym[${vowel}mnh]`, "i").test(remainingWord)
  ) {
    // before a vowel, m, n, or h ym should be [im]
    newTransliteration = "im";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^[${vowel}]y[${vowel}]`, "i").test(
      word.substring(index - 1)
    )
  ) {
    // y between two vowels should be [j]
    newTransliteration = "j";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

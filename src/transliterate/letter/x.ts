import { consonantExcludingH, vowel } from "../letter-group-definitions.ts";
import type {
  LetterTransliteration,
  LetterTransliterationArgs
} from "../types.ts";

export default function xTransliteration({
  word,
  index
}: LetterTransliterationArgs): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^x$/i.test(remainingWord)) {
    // final x should be /z/ in liaison, but otherwise silent
    // Note exceptions for final x - see test for details
    newTransliteration = "(z)";
  } else if (/^xh/i.test(remainingWord)) {
    // xh should be /gz/
    newTransliteration = "gz";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^x[${consonantExcludingH}]`, "i").test(remainingWord)
  ) {
    // x before a consonant (excluding h) should be /ks/
    newTransliteration = "ks";
  } else if (new RegExp(String.raw`^x[${vowel}]`, "i").test(remainingWord)) {
    // x before a vowel should be /gz/
    // Note exceptions for ordinal numbers - see test for details
    newTransliteration = "gz";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

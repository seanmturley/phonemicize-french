import {
  backVowel,
  consonantExcludingMNH,
  vowel
} from "../letter-group-definitions.ts";
import type { LetterTransliteration } from "../transliteration-types.ts";

export default function uTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (new RegExp(String.raw`^um[${vowel}]`, "i").test(remainingWord)) {
    // the u in um before a vowel should be /y/
    newTransliteration = "y";
  } else if (/^um(?!m)/i.test(remainingWord)) {
    // the u in um otherwise, if not followed by a second m, should be /ɔ/
    newTransliteration = "ɔ";
  } else if (/^un$/i.test(remainingWord)) {
    // un final should be /œ̃/ (a final /n/ is implied in liaison)
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^un[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // un before a consonant excluding m, n, or h should be /œ̃/
    newTransliteration = "œ̃";
    numTransliteratedCharacters = 2;
  } else if (new RegExp(String.raw`^un[${vowel}]`, "i").test(remainingWord)) {
    // un before a vowel should be /yn/
    newTransliteration = "yn";
    numTransliteratedCharacters = 2;
  } else if (/^(?:[^lr]{1,2}|([lr])\1)ua/i.test(word.substring(index - 2))) {
    // u followed by a should be /ɥ/, except when preceded by single l or r
    newTransliteration = "ɥ";
  } else if (/^[^lr]uo/i.test(word.substring(index - 1))) {
    // u followed by o should be /ɥ/, except when preceded by l or r
    newTransliteration = "ɥ";
  } else if (/^ue([rlt]|lle)$/i.test(remainingWord)) {
    // u followed by:
    // e with r, l, or t final, or;
    // elle final
    // should be /ɥ/
    newTransliteration = "ɥ";
  } else if (/^uill/i.test(remainingWord)) {
    // uill should be /ɥij/
    newTransliteration = "ɥij";
    numTransliteratedCharacters = 4;
  } else if (/^ui$/i.test(remainingWord)) {
    // ui final should be /ɥi/
    newTransliteration = "ɥi";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^u[iy][^${backVowel}]`, "i").test(remainingWord)
  ) {
    // ui or uy not followed by a back vowel should be /ɥi/
    newTransliteration = "ɥi";
    numTransliteratedCharacters = 2;
  } else if (/^üi/i.test(remainingWord)) {
    // üi should be /ɥi/
    newTransliteration = "ɥi";
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

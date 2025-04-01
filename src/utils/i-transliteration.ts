import { illExceptions } from "./ill-exceptions.ts";
import { consonantExcludingMNH } from "./letter-group-definitions.ts";
import type { LetterTransliteration } from "./transliteration-types.ts";

export default function iTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^î/i.test(remainingWord)) {
    // î should be /i/
    newTransliteration = "i";
  } else if (/^ï/i.test(remainingWord)) {
    // ï should be /i/
    newTransliteration = "i";
  } else if (/^ill/i.test(remainingWord) && illExceptions.has(word)) {
    // ill in a short list of exceptions should be /il/
    newTransliteration = "il";
    numTransliteratedCharacters = 3;
  } else if (/^ill/i.test(remainingWord)) {
    // ill should be /ij/
    // This is essentially a fallback - there are specific rules for other
    // vowels followed by "ill", which results in a different vowel sound
    newTransliteration = "ij";
    numTransliteratedCharacters = 3;
  } else if (/^in$/i.test(remainingWord)) {
    // final in should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^im[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h im should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^in[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h in should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else {
    // otherwise i should be /i/
    newTransliteration = "i";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

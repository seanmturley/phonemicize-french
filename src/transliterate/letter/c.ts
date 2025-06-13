import {
  backVowel,
  consonant,
  frontVowel
} from "../letter-group-definitions.ts";
import type { LetterTransliteration } from "../types.ts";

export default function cTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (word.charAt(index - 1) === "n" && /^c$/i.test(remainingWord)) {
    // final c after n should silent
    newTransliteration = "";
  } else if (/^c$/i.test(remainingWord)) {
    // final c should be /k/
    newTransliteration = "k";
  } else if (/^ct$/i.test(remainingWord)) {
    // final ct should be /kt/
    newTransliteration = "kt";
    numTransliteratedCharacters = 2;
  } else if (/^c[’']/i.test(remainingWord)) {
    // c with elision should be /s/
    newTransliteration = "s";
  } else if (/^ccueill/i.test(remainingWord)) {
    // cc followed by ueil should be /kœj/
    newTransliteration = "kœj";
    numTransliteratedCharacters = 7;
  } else if (/^ccueil/i.test(remainingWord)) {
    // cc followed by ueil should be /kœj/
    newTransliteration = "kœj";
    numTransliteratedCharacters = 6;
  } else if (/^cueill/i.test(remainingWord)) {
    // c followed by ueil should be /kœj/
    newTransliteration = "kœj";
    numTransliteratedCharacters = 6;
  } else if (/^cueil/i.test(remainingWord)) {
    // c followed by ueil should be /kœj/
    newTransliteration = "kœj";
    numTransliteratedCharacters = 5;
  } else if (
    new RegExp(String.raw`^c[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // before a front vowel c should should be /s/
    newTransliteration = "s";
  } else if (
    new RegExp(String.raw`^cc[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // before a front vowel cc should should be /ks/
    newTransliteration = "ks";
    numTransliteratedCharacters = 2;
  } else if (/^ch/i.test(remainingWord)) {
    // ch should be /ʃ/
    // Note exception for words of Greek origin pronounced /k/
    // e.g. Christ
    newTransliteration = "ʃ";
    numTransliteratedCharacters = 2;
  } else if (/^cqu/i.test(remainingWord)) {
    // cqu should be /k/
    newTransliteration = "k";
    numTransliteratedCharacters = 3;
  } else if (/^ç/i.test(remainingWord)) {
    // ç should be /s/
    newTransliteration = "s";
  } else if (
    new RegExp(String.raw`^cc[${backVowel}|${consonant}]`, "i").test(
      remainingWord
    )
  ) {
    // before a back vowel or consonant cc should should be /k/
    newTransliteration = "k";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^c[${backVowel}|${consonant}]`, "i").test(
      remainingWord
    )
  ) {
    // before a back vowel or consonant c should should be /k/
    newTransliteration = "k";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

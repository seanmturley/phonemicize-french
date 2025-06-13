import {
  consonant,
  consonantExcludingMNH,
  silentFinalConsonant,
  vowel
} from "../letter-group-definitions.ts";
import type { LetterTransliteration } from "../types.ts";

export default function eTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);
  const remainingWordWithPreviousLetter = word.substring(index - 1);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^é/i.test(remainingWord)) {
    // é should be /e/
    newTransliteration = "e";
  } else if (/^è/i.test(remainingWord)) {
    // è should be /ɛ/
    newTransliteration = "ɛ";
  } else if (/^ë/i.test(remainingWord)) {
    // ë should be /ɛ/
    newTransliteration = "ɛ";
  } else if (/^ê$/i.test(remainingWord)) {
    // ê final should be /ɛ/
    newTransliteration = "ɛ";
  } else if (
    new RegExp(String.raw`^ê[${silentFinalConsonant}]$`, "i").test(
      remainingWord
    )
  ) {
    // ê followed by a silent final consonant should be /ɛ/
    newTransliteration = "ɛ";
  } else if (/^ê/i.test(remainingWord)) {
    // ê otherwise (i.e. before a pronounced consonant) should be /ɛː/
    newTransliteration = "ɛː";
  } else if (new RegExp(String.raw`^ein[${vowel}]`, "i").test(remainingWord)) {
    // ein before a vowel should be /ɛn/
    newTransliteration = "ɛn";
    numTransliteratedCharacters = 3;
  } else if (/^ein/i.test(remainingWord)) {
    // ein otherwise should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 3;
  } else if (/^eil$/i.test(remainingWord)) {
    // final eil should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 3;
  } else if (/^euil$/i.test(remainingWord)) {
    // final euil should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 4;
  } else if (/^eill/i.test(remainingWord)) {
    // eill should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 4;
  } else if (/^euill/i.test(remainingWord)) {
    // euill should be /œj/
    newTransliteration = "œj";
    numTransliteratedCharacters = 5;
  } else if (/^eî/i.test(remainingWord)) {
    // eî should be /ɛː/
    newTransliteration = "ɛː";
    numTransliteratedCharacters = 2;
  } else if (/^ei$/i.test(remainingWord)) {
    // ei final should be /ɛj/
    newTransliteration = "ɛj";
    numTransliteratedCharacters = 2;
  } else if (/^ei/i.test(remainingWord)) {
    // ei otherwise should be /ɛː/
    newTransliteration = "ɛː";
    numTransliteratedCharacters = 2;
  } else if (/^eu$/i.test(remainingWord)) {
    // eu final should be /ø/
    newTransliteration = "ø";
    numTransliteratedCharacters = 2;
  } else if (/^eu[estxz]/i.test(remainingWord)) {
    // eu before e, s, t, x, or z should be /ø/
    newTransliteration = "ø";
    numTransliteratedCharacters = 2;
  } else if (/^eu/i.test(remainingWord)) {
    // eu otherwise should be /œ/
    newTransliteration = "œ";
    numTransliteratedCharacters = 2;
  } else if (/^eau/i.test(remainingWord)) {
    // eau should be /o/
    newTransliteration = "o";
    numTransliteratedCharacters = 3;
  } else if (word === "et") {
    // et final in the word 'et' should be /e/
    newTransliteration = "e";
    numTransliteratedCharacters = 2;
  } else if (/^et/i.test(remainingWord)) {
    // et final otherwise should be /ɛ/
    newTransliteration = "ɛ";
    numTransliteratedCharacters = 2;
  } else if (/^ens?$/i.test(remainingWord)) {
    // en final (and followed by final s) should be /ɛ̃/
    newTransliteration = "ɛ̃";
    numTransliteratedCharacters = 2;
  } else if (/^ents?$/i.test(remainingWord)) {
    // ent final (and followed by final s) otherwise should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 3;
  } else if (index === 0 && /^emm/i.test(remainingWord)) {
    // initial emm should be /ɑ̃m/
    newTransliteration = "ɑ̃m";
    numTransliteratedCharacters = 3;
  } else if (index === 0 && /^enn/i.test(remainingWord)) {
    // initial enn should be /ɑ̃n/
    newTransliteration = "ɑ̃n";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^em[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h em should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^en[${consonantExcludingMNH}]`, "i").test(
      remainingWord
    )
  ) {
    // before a consonant excluding m, n, or h en should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (/^ent$/i.test(remainingWord)) {
    // ent final otherwise should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 2;
  } else if (/^ents$/i.test(remainingWord)) {
    // ent final otherwise with s should be /ɑ̃/
    newTransliteration = "ɑ̃";
    numTransliteratedCharacters = 3;
  } else if (
    new RegExp(String.raw`^e[${consonant}][${vowel}]`, "i").test(remainingWord)
  ) {
    // e before a single consonant and a vowel should be /ə/
    newTransliteration = "ə";
  } else if (/^emment$/i.test(remainingWord)) {
    // e before two consonants: the adverb suffix 'emment' should be /amɑ̃/
    newTransliteration = "amɑ̃";
    numTransliteratedCharacters = 6;
  } else if (/^el$/i.test(remainingWord)) {
    // el final should be /ɛl/
    newTransliteration = "ɛl";
    numTransliteratedCharacters = 2;
  } else if (/^els$/i.test(remainingWord)) {
    // els final should be /ɛl/
    newTransliteration = "ɛl";
    numTransliteratedCharacters = 3;
  } else if (/^elle$/i.test(remainingWord)) {
    // elle final should be /ɛl(ə)/
    newTransliteration = "ɛl(ə)";
    numTransliteratedCharacters = 4;
  } else if (/^elles$/i.test(remainingWord)) {
    // elles final should be /ɛl(ə)/
    newTransliteration = "ɛl(ə)";
    numTransliteratedCharacters = 5;
  } else if (
    new RegExp(String.raw`^e[${consonant}]{2}`, "i").test(remainingWord)
  ) {
    // e before two consonants otherwise should be /ɛ/
    newTransliteration = "ɛ";
  } else if (
    word.length === 2 &&
    new RegExp(String.raw`^[${consonant}]e$`, "i").test(
      remainingWordWithPreviousLetter
    )
  ) {
    // e final after a consonant in monosyllables should be /ə/
    // These words are all 2 lettres long
    newTransliteration = "ə";
  } else if (
    word.length === 3 &&
    new RegExp(String.raw`^[${consonant}]es$`, "i").test(
      remainingWordWithPreviousLetter
    )
  ) {
    // e final after a consonant in monosyllables with s should be /e(z)/
    // These words are all 3 lettres long
    newTransliteration = "e(z)";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^[${consonant}]e$`, "i").test(
      remainingWordWithPreviousLetter
    )
  ) {
    // e final after a consonant otherwise should be /(ə)/
    newTransliteration = "(ə)";
  } else if (
    new RegExp(String.raw`^[${consonant}]es$`, "i").test(
      remainingWordWithPreviousLetter
    )
  ) {
    // e final after a consonant otherwise with s should be /(ə)/
    newTransliteration = "(ə)";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^e[${silentFinalConsonant}]$`, "i").test(
      remainingWord
    )
  ) {
    // e before a silent final consonant should be /e/
    newTransliteration = "e";
  } else if (
    new RegExp(String.raw`^e[${consonant}]$`, "i").test(remainingWord)
  ) {
    // e before a pronounced final consonant should be /ɛ/
    newTransliteration = "ɛ";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}

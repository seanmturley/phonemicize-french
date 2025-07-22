// Tests based on Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/French_phonology#Consonants
// Vowels - https://en.wikipedia.org/wiki/French_phonology#Vowels

import transliterateWord from "./word.ts";
import type { TransliterationTestData } from "./types.ts";

const phonemes: TransliterationTestData = {
  // Unvoiced consonants
  p: { ipa: "pu", word: "pou", pos: "N" },
  t: { ipa: "tu(t)", word: "tout", pos: "J" },
  k: { ipa: "ku", word: "cou", pos: "N" },
  f: { ipa: "fu", word: "fou", pos: "J" },
  s: { ipa: "su", word: "sous", pos: "P" },
  ʃ: { ipa: "ʃu", word: "chou", pos: "N" },
  // Voiced consonants
  b: { ipa: "bu", word: "boue", pos: "N" },
  d: { ipa: "du", word: "doux", pos: "J" },
  ɡ: { ipa: "ɡu", word: "goût", pos: "N" },
  v: { ipa: "vu(z)", word: "vous", pos: "R" },
  z: { ipa: "zu", word: "zou", pos: "I" },
  ʒ: { ipa: "ʒu", word: "joue", pos: "N" },
  m: { ipa: "mu", word: "mou", pos: "J" },
  n: { ipa: "nu(z)", word: "nous", pos: "R" },
  ɲ: { ipa: "ɲu", word: "gnou", pos: "N" },
  ŋ: { ipa: "kuŋ-fu", word: "kung-fu", pos: "N" },
  l: { ipa: "lu", word: "loup", pos: "N" },
  ʁ: { ipa: "ʁu", word: "roue", pos: "N" },
  // Oral vowels
  i: { ipa: "si", word: "si", pos: "C" },
  e: { ipa: "fe", word: "fée", pos: "N" },
  ɛ: { ipa: "fɛ", word: "fait", pos: "V" },
  ɛː: { ipa: "fɛːt(ə)", word: "fête", pos: "N" },
  y: { ipa: "sy", word: "su", pos: "V" },
  ø: { ipa: "sø", word: "ceux", pos: "R" },
  œ: { ipa: "sœʁ", word: "sœur", pos: "N" },
  ə: { ipa: "sə", word: "ce", pos: "D" },
  u: { ipa: "su", word: "sous", pos: "P" },
  o: { ipa: "so", word: "sot", pos: "J" },
  ɔ: { ipa: "sɔʁ", word: "sort", pos: "N" },
  a: { ipa: "sa", word: "sa", pos: "D" },
  ɑ: { ipa: "pɑt(ə)", word: "pâte", pos: "N" },
  // Nasal vowels
  ɑ̃: { ipa: "sɑ̃(z)", word: "sans", pos: "P" },
  ɔ̃: { ipa: "sɔ̃", word: "son", pos: "D" },
  ɛ̃: { ipa: "bʁɛ̃", word: "brin", pos: "N" },
  œ̃: { ipa: "bʁœ̃", word: "brun", pos: "J" },
  // Semi-vowels
  j: { ipa: "jɛʁ", word: "hier", pos: "A" },
  ɥ: { ipa: "ɥit", word: "huit", pos: "K" },
  w: { ipa: "wi", word: "oui", pos: "A" }
};

describe("transliterateWord", () => {
  describe("should transliterate all phonemes", () => {
    for (const phoneme in phonemes) {
      const currentPhoneme = phonemes[phoneme];
      it(`${currentPhoneme.word}`, () => {
        const result = transliterateWord(
          currentPhoneme.word,
          currentPhoneme.pos ?? ""
        );

        expect(result).toBe(currentPhoneme.ipa);
      });
    }
  });

  it("should return punctuation unchanged", () => {
    // This tests a non-exhaustive list, but covers many common
    // symbols - in theory all punctuation is covered by the
    // Unicode punctuation character class
    const result = transliterateWord(`.,':;-?!«»‹›“”‘’"''()`, "M");

    expect(result).toBe(`.,':;-?!«»‹›“”‘’"''()`);
  });

  it("should return numerals unchanged", () => {
    const result = transliterateWord("0123456789", "Y");

    expect(result).toBe("0123456789");
  });
});

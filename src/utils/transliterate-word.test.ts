// Tests based on Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/French_phonology#Consonants
// Vowels - https://en.wikipedia.org/wiki/French_phonology#Vowels

import transliterateWord from "./transliterate-word.ts";

type Phoneme = {
  ipa: string;
  word: string;
};

type Phonemes = { [key: string]: Phoneme };

const phonemes: Phonemes = {
  // Unvoiced consonants
  p: { ipa: "pu", word: "pou" },
  t: { ipa: "tu", word: "tout" },
  k: { ipa: "ku", word: "cou" },
  f: { ipa: "fu", word: "fou" },
  s: { ipa: "su", word: "sous" },
  ʃ: { ipa: "ʃu", word: "chou" },
  // Voiced consonants
  b: { ipa: "bu", word: "boue" },
  d: { ipa: "du", word: "doux" },
  ɡ: { ipa: "ɡu", word: "goût" },
  v: { ipa: "vu", word: "vous" },
  z: { ipa: "zu", word: "zou" },
  ʒ: { ipa: "ʒu", word: "joue" },
  m: { ipa: "mu", word: "mou" },
  n: { ipa: "nu", word: "nous" },
  ɲ: { ipa: "ɲu", word: "gnou" },
  ŋ: { ipa: "kuŋ.fu", word: "kung-fu" },
  l: { ipa: "lu", word: "loup" },
  ʁ: { ipa: "ʁu", word: "roue" },
  // Oral vowels
  i: { ipa: "si", word: "si" },
  e: { ipa: "fe", word: "fée" },
  ɛ: { ipa: "fɛ", word: "fait" },
  ɛː: { ipa: "fɛːt", word: "fête" },
  y: { ipa: "sy", word: "su" },
  ø: { ipa: "sø", word: "ceux" },
  œ: { ipa: "sœʁ", word: "sœur" },
  ə: { ipa: "sə", word: "ce" },
  u: { ipa: "su", word: "sous" },
  o: { ipa: "so", word: "sot" },
  ɔ: { ipa: "sɔʁ", word: "sort" },
  a: { ipa: "sa", word: "sa" },
  ɑ: { ipa: "pɑt", word: "pâte" },
  // Nasal vowels
  ɑ̃: { ipa: "sɑ̃", word: "sans" },
  ɔ̃: { ipa: "sɔ̃", word: "son" },
  ɛ̃: { ipa: "bʁɛ̃", word: "brin" },
  œ̃: { ipa: "bʁœ̃", word: "brun" },
  // Semi-vowels
  j: { ipa: "jɛʁ", word: "hier" },
  ɥ: { ipa: "ɥit", word: "huit" },
  w: { ipa: "wi", word: "oui" }
};

describe("transliterateWord should transliterate", () => {
  for (const phoneme in phonemes) {
    const currentPhoneme = phonemes[phoneme];
    it(`${currentPhoneme.word}`, () => {
      const result = transliterateWord(currentPhoneme.word);

      expect(result).toBe(currentPhoneme.ipa);
    });
  }
});

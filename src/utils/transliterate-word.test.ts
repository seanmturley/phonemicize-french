// Tests based on Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/French_phonology#Consonants
// Vowels - https://en.wikipedia.org/wiki/French_phonology#Vowels

import transliterateWord from "./transliterate-word.ts";

type Phoneme = {
  ipa: string;
  partial: string;
  word: string;
};

type Phonemes = { [key: string]: Phoneme };

const phonemes: Phonemes = {
  // Unvoiced consonants
  p: { ipa: "pu", partial: "pou", word: "pou" },
  t: { ipa: "tu", partial: "tout", word: "tout" },
  k: { ipa: "ku", partial: "cou", word: "cou" },
  f: { ipa: "fu", partial: "fou", word: "fou" },
  s: { ipa: "su", partial: "sous", word: "sous" },
  ʃ: { ipa: "ʃu", partial: "chou", word: "chou" },
  // Voiced consonants
  b: { ipa: "bu", partial: "boue", word: "boue" },
  d: { ipa: "du", partial: "doux", word: "doux" },
  ɡ: { ipa: "ɡu", partial: "goût", word: "goût" },
  v: { ipa: "vu", partial: "vous", word: "vous" },
  z: { ipa: "zu", partial: "zou", word: "zou" },
  ʒ: { ipa: "ʒu", partial: "joue", word: "joue" },
  m: { ipa: "mu", partial: "mou", word: "mou" },
  n: { ipa: "nu", partial: "nous", word: "nous" },
  ɲ: { ipa: "ɲu", partial: "gnou", word: "gnou" },
  ŋ: { ipa: "kuŋ.fu", partial: "kung-fu", word: "kung-fu" },
  l: { ipa: "lu", partial: "loup", word: "loup" },
  ʁ: { ipa: "ʁu", partial: "roue", word: "roue" },
  // Oral vowels
  i: { ipa: "si", partial: "si", word: "si" },
  e: { ipa: "fe", partial: "fée", word: "fée" },
  ɛ: { ipa: "fɛ", partial: "fait", word: "fait" },
  ɛː: { ipa: "fɛːt", partial: "fête", word: "fête" },
  y: { ipa: "sy", partial: "su", word: "su" },
  ø: { ipa: "sø", partial: "ceux", word: "ceux" },
  œ: { ipa: "sœʁ", partial: "sœur", word: "sœur" },
  ə: { ipa: "sə", partial: "ce", word: "ce" },
  u: { ipa: "su", partial: "sous", word: "sous" },
  o: { ipa: "so", partial: "sot", word: "sot" },
  ɔ: { ipa: "sɔʁ", partial: "sort", word: "sort" },
  a: { ipa: "sa", partial: "sa", word: "sa" },
  ɑ: { ipa: "pɑt", partial: "pâte", word: "pâte" },
  // Nasal vowels
  ɑ̃: { ipa: "sɑ̃", partial: "sans", word: "sans" },
  ɔ̃: { ipa: "sɔ̃", partial: "son", word: "son" },
  ɛ̃: { ipa: "bʁɛ̃", partial: "brin", word: "brin" },
  œ̃: { ipa: "bʁœ̃", partial: "brun", word: "brun" },
  // Semi-vowels
  j: { ipa: "jɛʁ", partial: "hier", word: "hier" },
  ɥ: { ipa: "ɥit", partial: "huit", word: "huit" },
  w: { ipa: "wi", partial: "oui", word: "oui" }
};

describe("transliterateWord should transliterate", () => {
  for (const phoneme in phonemes) {
    const currentPhoneme = phonemes[phoneme];
    it(`${currentPhoneme.word}`, () => {
      const result = transliterateWord(currentPhoneme.word);

      expect(result).toBe(currentPhoneme.partial);
    });
  }
});

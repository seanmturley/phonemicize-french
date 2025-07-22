// Conjugations from https://conjugator.reverso.net
// IPA transliterations adapted from https://fr.wiktionary.org/

import type { TransliterationTestData } from "./types.ts";
import transliterateWord from "./word.ts";

const premierGroupe: TransliterationTestData = {
  infinitif: { word: "aimer", ipa: "ɛme" },

  // Participe
  ppr: { word: "aimant", ipa: "ɛmɑ̃" },

  "ppa m s": { word: "aimé", ipa: "ɛme" },
  "ppa f s": { word: "aimée", ipa: "ɛme" },
  "ppa m p": { word: "aimés", ipa: "ɛme" },
  "ppa f p": { word: "aimées", ipa: "ɛme" },

  // Indicatif
  "ind pres 1 s": { word: "aime", ipa: "ɛm(ə)" },
  "ind pres 2 s": { word: "aimes", ipa: "ɛm(ə)" },
  "ind pres 3 s": { word: "aime", ipa: "ɛm(ə)" },
  "ind pres 1 p": { word: "aimons", ipa: "ɛmɔ̃" },
  "ind pres 2 p": { word: "aimez", ipa: "ɛme" },
  "ind pres 3 p": { word: "aiment", ipa: "ɛm(ə)" },

  "ind impa 1 s": { word: "aimais", ipa: "ɛmɛ" },
  "ind impa 2 s": { word: "aimais", ipa: "ɛmɛ" },
  "ind impa 3 s": { word: "aimait", ipa: "ɛmɛ" },
  "ind impa 1 p": { word: "aimions", ipa: "ɛmjɔ̃" },
  "ind impa 2 p": { word: "aimiez", ipa: "ɛmje" },
  "ind impa 3 p": { word: "aimaient", ipa: "ɛmɛ" },

  "ind futu 1 s": { word: "aimerai", ipa: "ɛm(ə)ʁe" },
  "ind futu 2 s": { word: "aimeras", ipa: "ɛm(ə)ʁa" },
  "ind futu 3 s": { word: "aimera", ipa: "ɛm(ə)ʁa" },
  "ind futu 1 p": { word: "aimerons", ipa: "ɛm(ə)ʁɔ̃" },
  "ind futu 2 p": { word: "aimerez", ipa: "ɛm(ə)ʁe" },
  "ind futu 3 p": { word: "aimeront", ipa: "ɛm(ə)ʁɔ̃" },

  "ind psim 1 s": { word: "aimai", ipa: "ɛme" },
  "ind psim 2 s": { word: "aimas", ipa: "ɛma" },
  "ind psim 3 s": { word: "aima", ipa: "ɛma" },
  "ind psim 1 p": { word: "aimâmes", ipa: "ɛmɑm" },
  "ind psim 2 p": { word: "aimâtes", ipa: "ɛmɑt" },
  "ind psim 3 p": { word: "aimèrent", ipa: "ɛmɛʁ" },

  // Subjonctif
  "sub pres 1 s": { word: "aime", ipa: "ɛm(ə)" },
  "sub pres 2 s": { word: "aimes", ipa: "ɛm(ə)" },
  "sub pres 3 s": { word: "aime", ipa: "ɛm(ə)" },
  "sub pres 1 p": { word: "aimions", ipa: "ɛmjɔ̃" },
  "sub pres 2 p": { word: "aimiez", ipa: "ɛmje" },
  "sub pres 3 p": { word: "aiment", ipa: "ɛm(ə)" },

  "sub impa 1 s": { word: "aimasse", ipa: "ɛmas" },
  "sub impa 2 s": { word: "aimasses", ipa: "ɛmas" },
  "sub impa 3 s": { word: "aimât", ipa: "ɛmɑ" },
  "sub impa 1 p": { word: "aimassions", ipa: "ɛmasjɔ̃" },
  "sub impa 2 p": { word: "aimassiez", ipa: "ɛmasje" },
  "sub impa 3 p": { word: "aimassent", ipa: "ɛmas" },

  // Conditionnel
  "cond pres 1 s": { word: "aimerais", ipa: "ɛm(ə)ʁɛ" },
  "cond pres 2 s": { word: "aimerais", ipa: "ɛm(ə)ʁɛ" },
  "cond pres 3 s": { word: "aimerait", ipa: "ɛm(ə)ʁɛ" },
  "cond pres 1 p": { word: "aimerions", ipa: "ɛm(ə)ʁɔ̃" },
  "cond pres 2 p": { word: "aimeriez", ipa: "ɛm(ə)ʁe" },
  "cond pres 3 p": { word: "aimeraient", ipa: "ɛm(ə)ʁɛ" },

  // Impératif
  "imp pres 2 s": { word: "aime", ipa: "ɛm(ə)" },
  "imp pres 1 p": { word: "aimons", ipa: "ɛmɔ̃" },
  "imp pres 2 p": { word: "aimez", ipa: "ɛme" }
};

const deuxièmeGroupe: TransliterationTestData = {
  infinitif: { word: "finir", ipa: "" },

  // Participe
  ppr: { word: "finissant", ipa: "" },

  "ppa m s": { word: "fini", ipa: "" },
  "ppa f s": { word: "finie", ipa: "" },
  "ppa m p": { word: "finis", ipa: "" },
  "ppa f p": { word: "finies", ipa: "" },

  // Indicatif
  "ind pres 1 s": { word: "finis", ipa: "" },
  "ind pres 2 s": { word: "finis", ipa: "" },
  "ind pres 3 s": { word: "finit", ipa: "" },
  "ind pres 1 p": { word: "finissons", ipa: "" },
  "ind pres 2 p": { word: "finissez", ipa: "" },
  "ind pres 3 p": { word: "finissent", ipa: "" },

  "ind impa 1 s": { word: "finissais", ipa: "" },
  "ind impa 2 s": { word: "finissais", ipa: "" },
  "ind impa 3 s": { word: "finissait", ipa: "" },
  "ind impa 1 p": { word: "finissions", ipa: "" },
  "ind impa 2 p": { word: "finissiez", ipa: "" },
  "ind impa 3 p": { word: "finissaient", ipa: "" },

  "ind futu 1 s": { word: "finirai", ipa: "" },
  "ind futu 2 s": { word: "finiras", ipa: "" },
  "ind futu 3 s": { word: "finira", ipa: "" },
  "ind futu 1 p": { word: "finirons", ipa: "" },
  "ind futu 2 p": { word: "finirez", ipa: "" },
  "ind futu 3 p": { word: "finiront", ipa: "" },

  "ind psim 1 s": { word: "finis", ipa: "" },
  "ind psim 2 s": { word: "finis", ipa: "" },
  "ind psim 3 s": { word: "finit", ipa: "" },
  "ind psim 1 p": { word: "finîmes", ipa: "" },
  "ind psim 2 p": { word: "finîtes", ipa: "" },
  "ind psim 3 p": { word: "finirent", ipa: "" },

  // Subjonctif
  "sub pres 1 s": { word: "finisse", ipa: "" },
  "sub pres 2 s": { word: "finisses", ipa: "" },
  "sub pres 3 s": { word: "finisse", ipa: "" },
  "sub pres 1 p": { word: "finissions", ipa: "" },
  "sub pres 2 p": { word: "finissiez", ipa: "" },
  "sub pres 3 p": { word: "finissent", ipa: "" },

  "sub impa 1 s": { word: "finisse", ipa: "" },
  "sub impa 2 s": { word: "finisses", ipa: "" },
  "sub impa 3 s": { word: "finît", ipa: "" },
  "sub impa 1 p": { word: "finissions", ipa: "" },
  "sub impa 2 p": { word: "finissiez", ipa: "" },
  "sub impa 3 p": { word: "finissent", ipa: "" },

  // Conditionnel
  "cond pres 1 s": { word: "finirais", ipa: "" },
  "cond pres 2 s": { word: "finirais", ipa: "" },
  "cond pres 3 s": { word: "finirait", ipa: "" },
  "cond pres 1 p": { word: "finirions", ipa: "" },
  "cond pres 2 p": { word: "finiriez", ipa: "" },
  "cond pres 3 p": { word: "finiraient", ipa: "" },

  // Impératif
  "imp pres 2 s": { word: "finis", ipa: "" },
  "imp pres 1 p": { word: "finissons", ipa: "" },
  "imp pres 2 p": { word: "finissez", ipa: "" }
};

describe("transliterateWord should transliterate all verb conjugations for", () => {
  describe("the 'premier groupe'", () => {
    for (const conjugation in premierGroupe) {
      const currentConjugation = premierGroupe[conjugation];

      it(`${conjugation}: ${currentConjugation.word}`, () => {
        const result = transliterateWord(currentConjugation.word, "verbe");

        expect(result).toBe(currentConjugation.ipa);
      });
    }
  });
});

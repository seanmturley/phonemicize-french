import uTransliteration from "./u-transliteration.ts";

describe("uTransliteration", () => {
  // Need to think about how to check for stressed vowels - can this be
  // done programmatically in a reliable way?
  // it("u before a stressed vowel should be [ɥ]", () => {
  //   const word = "lui";
  //   const index = 1;

  //   const [newTransliteration, newIndex] = uTransliteration(word, index);

  //   expect(newTransliteration).toBe("ɥ");
  //   expect(newIndex).toBe(2);
  // });

  describe("before a vowel", () => {
    it("um should be [ym]", () => {
      const word = "fume";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ym");
      expect(newIndex).toBe(3);
    });

    it("un should be [yn]", () => {
      const word = "unanime";
      const index = 0;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("yn");
      expect(newIndex).toBe(2);
    });
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("um should be [œ̃]", () => {
      // Other than plurals, the number of words with this sequence of letters
      // is very small. They largely seem to be borrowings directly from Latin
      // e.g. a handful of words from `circum-` e.g. `circumterrestre`, where
      // the `um` is pronounced `[ɔm]`.

      const word = "parfums";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(6);
    });

    it("un should be [œ̃]", () => {
      const word = "emprunte";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(6);
    });
  });

  describe("final", () => {
    it("um should be [œ̃]", () => {
      // There are a number of exceptions to this rule, which largely seem to
      // be borrowings directly from Latin e.g. 'album' and 'atrium', where
      // the `um` is pronounced `[ɔm]`.

      const word = "parfum";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(6);
    });

    it("un should be [œ̃n] in liaison, but otherwise [œ̃]", () => {
      const word = "aucun";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃(n)");
      expect(newIndex).toBe(5);
    });
  });

  describe("in all other cases", () => {
    it("u should be [y]", () => {
      const word = "abus";
      const index = 2;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
    });

    it("û should be [y]", () => {
      const word = "dû";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(2);
    });

    it("ü should be [y]", () => {
      const word = "führer";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(2);
    });

    it("ue should be [y]", () => {
      const word = "due";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
    });
  });
});

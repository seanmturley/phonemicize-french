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
    it("um should be [y]", () => {
      const word = "fume";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
    });

    it("un should be [y]", () => {
      const word = "unanime";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
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

  describe("ue followed by", () => {
    it("il should be [œ]", () => {
      const word = "orgueil";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(5);
    });

    it("ill should be [œ]", () => {
      const word = "cueillir";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(3);
    });

    it("ille should be [œ]", () => {
      const word = "accueille";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(5);
    });
  });
});

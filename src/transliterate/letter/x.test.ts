import xTransliteration from "./x.ts";

describe("xTransliteration", () => {
  describe("final x", () => {
    it("should be /z/ in liaison, but otherwise silent", () => {
      // Note exceptions for six and dix:
      // - /s/ independently
      // - /z/ before a modified word starting with a vowel or h-muet
      // - silent before a modified word starting with a consonant
      //   (including h-aspiré)

      const word = "faux";
      const index = 3;

      const [newTransliteration, newIndex] = xTransliteration({ word, index });

      expect(newTransliteration).toBe("(z)");
      expect(newIndex).toBe(4);
    });

    it("should be silent for proper nouns", () => {
      const word = "Bordeaux";
      const posArray = ["nom propre"];
      const index = 7;

      const [newTransliteration, newIndex] = xTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(8);
    });

    it("should be silent for singular nouns", () => {
      const word = "doux";
      const posArray = ["nom commun", "singulier"];
      const index = 3;

      const [newTransliteration, newIndex] = xTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(4);
    });
  });

  it("xh should be /gz/", () => {
    const word = "exhume";
    const index = 1;

    const [newTransliteration, newIndex] = xTransliteration({ word, index });

    expect(newTransliteration).toBe("gz");
    expect(newIndex).toBe(3);
  });

  describe("x before", () => {
    it("a consonant (excluding h) should be /ks/", () => {
      const word = "texte";
      const index = 2;

      const [newTransliteration, newIndex] = xTransliteration({ word, index });

      expect(newTransliteration).toBe("ks");
      expect(newIndex).toBe(3);
    });

    it("a vowel should be /gz/", () => {
      // Note exceptions for:
      // - (*-)deuxième*, (*-)sixième*, (*-)dixième* (becomes /z/)

      const word = "exemple";
      const index = 1;

      const [newTransliteration, newIndex] = xTransliteration({ word, index });

      expect(newTransliteration).toBe("gz");
      expect(newIndex).toBe(2);
    });
  });
});

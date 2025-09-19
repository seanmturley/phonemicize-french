import sTransliteration from "./s.ts";

describe("sTransliteration", () => {
  it("s with elision should be /s/", () => {
    const word = "s'il";
    const index = 0;

    const [newTransliteration, newIndex] = sTransliteration({ word, index });

    expect(newTransliteration).toBe("s");
    expect(newIndex).toBe(1);
  });

  describe("final s", () => {
    it("should be silent for proper nouns", () => {
      // Note there are quite a few exceptions to this, many of which
      // are proper nouns of Greek origin e.g. Adonis, Adidas
      const word = "Alexis";
      const posArray = ["nom propre"];
      const index = 5;

      const [newTransliteration, newIndex] = sTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(6);
    });

    it("should be silent for singular nouns", () => {
      const word = "anglais";
      const posArray = ["nom commun", "singulier"];
      const index = 6;

      const [newTransliteration, newIndex] = sTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(7);
    });

    it("should be silent when following r", () => {
      const word = "toujours";
      const index = 7;

      const [newTransliteration, newIndex] = sTransliteration({
        word,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(8);
    });

    it("otherwise final s should be /z/ in liaison, but otherwise silent", () => {
      // Note exceptions e.g. hélas, lis, fils

      const word = "mes";
      const index = 2;

      const [newTransliteration, newIndex] = sTransliteration({ word, index });

      expect(newTransliteration).toBe("(z)");
      expect(newIndex).toBe(3);
    });
  });

  describe("single s", () => {
    it("between vowels should be /z/", () => {
      const word = "maison";
      const index = 3;

      const [newTransliteration, newIndex] = sTransliteration({ word, index });

      expect(newTransliteration).toBe("z");
      expect(newIndex).toBe(4);
    });

    it("not between vowels should be /s/", () => {
      const word = "astre";
      const index = 1;

      const [newTransliteration, newIndex] = sTransliteration({ word, index });

      expect(newTransliteration).toBe("s");
      expect(newIndex).toBe(2);
    });
  });

  it("ss should be /s/", () => {
    const word = "agasse";
    const index = 3;

    const [newTransliteration, newIndex] = sTransliteration({ word, index });

    expect(newTransliteration).toBe("s");
    expect(newIndex).toBe(5);
  });

  describe("sc before", () => {
    it("a front vowel should be /s/", () => {
      const word = "descendre";
      const index = 2;

      const [newTransliteration, newIndex] = sTransliteration({ word, index });

      expect(newTransliteration).toBe("s");
      expect(newIndex).toBe(4);
    });

    it("a back vowel or consonant should be /sk/", () => {
      const word = "scandale";
      const index = 0;

      const [newTransliteration, newIndex] = sTransliteration({ word, index });

      expect(newTransliteration).toBe("sk");
      expect(newIndex).toBe(2);
    });
  });

  it("sch should be /ʃ/", () => {
    const word = "schéma";
    const index = 0;

    const [newTransliteration, newIndex] = sTransliteration({ word, index });

    expect(newTransliteration).toBe("ʃ");
    expect(newIndex).toBe(3);
  });
});

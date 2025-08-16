import dTransliteration from "./d.ts";

describe("dTransliteration", () => {
  describe("final d", () => {
    it("should be /t/ in liaison, but otherwise silent", () => {
      const word = "grand";
      const index = 4;

      const [newTransliteration, newIndex] = dTransliteration({
        word,
        index
      });

      expect(newTransliteration).toBe("(t)");
      expect(newIndex).toBe(5);
    });

    it("should be silent for proper nouns", () => {
      const word = "Arnaud";
      const posArray = ["nom propre"];
      const index = 5;

      const [newTransliteration, newIndex] = dTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(6);
    });

    it("should be silent for singular nouns", () => {
      const word = "blond";
      const posArray = ["nom commun", "singulier"];
      const index = 4;

      const [newTransliteration, newIndex] = dTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(5);
    });
  });

  describe("initial or medial", () => {
    it("d should be /d/", () => {
      const word = "doux";
      const index = 0;

      const [newTransliteration, newIndex] = dTransliteration({ word, index });

      expect(newTransliteration).toBe("d");
      expect(newIndex).toBe(1);
    });

    it("dd should be /d/", () => {
      const word = "addition";
      const index = 1;

      const [newTransliteration, newIndex] = dTransliteration({ word, index });

      expect(newTransliteration).toBe("d");
      expect(newIndex).toBe(3);
    });
  });
});

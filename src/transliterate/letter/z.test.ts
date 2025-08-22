import zTransliteration from "./z.ts";

describe("zTransliteration", () => {
  describe("final z", () => {
    it("should be pronounced for proper nouns by default", () => {
      const word = "Berlioz";
      const posArray = ["nom propre"];
      const index = 6;

      const [newTransliteration, newIndex] = zTransliteration({
        word,
        posArray,
        index
      });

      expect(newTransliteration).toBe("z");
      expect(newIndex).toBe(7);
    });

    it("otherwise should be /z/ in liaison, but otherwise silent", () => {
      // Note exceptions, generally loan words or proper nouns e.g.:
      // - gaz, jazz /z/
      // - quartz /s/
      // - Rodez, Berlioz /z/

      const word = "chez";
      const index = 3;

      const [newTransliteration, newIndex] = zTransliteration({ word, index });

      expect(newTransliteration).toBe("(z)");
      expect(newIndex).toBe(4);
    });
  });

  it("initial z should be /z/", () => {
    const word = "zèle";
    const index = 0;

    const [newTransliteration, newIndex] = zTransliteration({ word, index });

    expect(newTransliteration).toBe("z");
    expect(newIndex).toBe(1);
  });

  it("medial z should be /z/", () => {
    const word = "douze";
    const index = 3;

    const [newTransliteration, newIndex] = zTransliteration({ word, index });

    expect(newTransliteration).toBe("z");
    expect(newIndex).toBe(4);
  });
});

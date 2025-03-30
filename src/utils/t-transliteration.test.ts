import tTransliteration from "./t-transliteration.ts";

describe("tTransliteration", () => {
  it("final t should be /t/ in liaison, but otherwise silent", () => {
    const word = "tout";
    const index = 3;

    const [newTransliteration, newIndex] = tTransliteration(word, index);

    expect(newTransliteration).toBe("(t)");
    expect(newIndex).toBe(4);
  });

  describe("initial or medial", () => {
    it("t should be /t/", () => {
      const word = "total";
      const index = 0;

      const [newTransliteration, newIndex] = tTransliteration(word, index);

      expect(newTransliteration).toBe("t");
      expect(newIndex).toBe(1);
    });

    it("tt should be /t/", () => {
      const word = "glotte";
      const index = 3;

      const [newTransliteration, newIndex] = tTransliteration(word, index);

      expect(newTransliteration).toBe("t");
      expect(newIndex).toBe(5);
    });
  });

  it("th should be /t/", () => {
    const word = "Thomas";
    const index = 0;

    const [newTransliteration, newIndex] = tTransliteration(word, index);

    expect(newTransliteration).toBe("t");
    expect(newIndex).toBe(2);
  });

  describe("the ending", () => {
    it("tion should be [sjɔ̃]", () => {
      const word = "attention";
      const index = 5;

      const [newTransliteration, newIndex] = tTransliteration(word, index);

      expect(newTransliteration).toBe("sjɔ̃");
      expect(newIndex).toBe(9);
    });

    it("tience should be [sjɑ̃s]", () => {
      const word = "patience";
      const index = 2;

      const [newTransliteration, newIndex] = tTransliteration(word, index);

      expect(newTransliteration).toBe("sjɑ̃s");
      expect(newIndex).toBe(8);
    });
  });
});

import dTransliteration from "./d-transliteration.ts";

describe("dTransliteration", () => {
  it("final d should be [t] in liaison, but otherwise silent", () => {
    const word = "grand";
    const index = 4;

    const [newTransliteration, newIndex] = dTransliteration(word, index);

    expect(newTransliteration).toBe("(t)");
    expect(newIndex).toBe(5);
  });

  describe("initial or medial", () => {
    it("d should be [d]", () => {
      const word = "doux";
      const index = 0;

      const [newTransliteration, newIndex] = dTransliteration(word, index);

      expect(newTransliteration).toBe("d");
      expect(newIndex).toBe(1);
    });

    it("dd should be [d]", () => {
      const word = "addition";
      const index = 1;

      const [newTransliteration, newIndex] = dTransliteration(word, index);

      expect(newTransliteration).toBe("d");
      expect(newIndex).toBe(3);
    });
  });
});

import dTransliteration from "./d-transliteration.ts";

describe("dTransliteration", () => {
  it("final d should be [t] in liaison, but otherwise silent", () => {
    const latin = "d"; // grand

    const [newLatin, newTransliteration] = dTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("(t)");
  });

  describe("initial or medial", () => {
    it("d should return [d]", () => {
      const latin = "doux";

      const [newLatin, newTransliteration] = dTransliteration(latin);

      expect(newLatin).toBe("oux");
      expect(newTransliteration).toBe("d");
    });

    it("dd should return [d]", () => {
      const latin = "ddition"; // addition

      const [newLatin, newTransliteration] = dTransliteration(latin);

      expect(newLatin).toBe("ition");
      expect(newTransliteration).toBe("d");
    });
  });
});

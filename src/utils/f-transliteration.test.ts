import fTransliteration from "./f-transliteration.ts";

describe("fTransliteration", () => {
  it("final f should be [f]", () => {
    // Note exceptions for:
    // - neuf (becomes [v] in liaison with "heures" or "ans")
    // - cerf or cerfs (silent)
    // - œufs & bœufs (-fs is silent)

    const word = "veuf";
    const index = 3;

    const [newTransliteration, newIndex] = fTransliteration(word, index);

    expect(newTransliteration).toBe("f");
    expect(newIndex).toBe(4);
  });

  describe("initial or medial", () => {
    it("f should be [f]", () => {
      const word = "enfant";
      const index = 2;

      const [newTransliteration, newIndex] = fTransliteration(word, index);

      expect(newTransliteration).toBe("f");
      expect(newIndex).toBe(3);
    });

    it("ff should be [f]", () => {
      const word = "effort";
      const index = 1;

      const [newTransliteration, newIndex] = fTransliteration(word, index);

      expect(newTransliteration).toBe("f");
      expect(newIndex).toBe(3);
    });
  });
});

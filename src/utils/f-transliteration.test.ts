import fTransliteration from "./f-transliteration.ts";

describe("fTransliteration", () => {
  it("final f should be [f]", () => {
    // Note exceptions for:
    // - neuf (becomes [v] in liaison with "heures" or "ans")
    // - cerf or cerfs (silent)
    // - œufs & bœufs (-fs is silent)

    const latin = "f"; // veuf

    const [newLatin, newTransliteration] = fTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("f");
  });

  describe("initial or medial", () => {
    it("f should return [f]", () => {
      const latin = "fant"; // enfant

      const [newLatin, newTransliteration] = fTransliteration(latin);

      expect(newLatin).toBe("ant");
      expect(newTransliteration).toBe("f");
    });

    it("ff should return [f]", () => {
      const latin = "ffort"; // effort

      const [newLatin, newTransliteration] = fTransliteration(latin);

      expect(newLatin).toBe("ort");
      expect(newTransliteration).toBe("f");
    });
  });
});

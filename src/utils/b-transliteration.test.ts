import bTransliteration from "./b-transliteration.ts";

describe("bTransliteration", () => {
  it("b initial or medial should return [b]", () => {
    const latin = "beau";

    const [newLatin, newTransliteration] = bTransliteration(latin);

    expect(newLatin).toBe("eau");
    expect(newTransliteration).toBe("b");
  });

  it("bb medial should return [b]", () => {
    const latin = "bbesse"; // abbesse

    const [newLatin, newTransliteration] = bTransliteration(latin);

    expect(newLatin).toBe("esse");
    expect(newTransliteration).toBe("b");
  });

  it("b final should be silent", () => {
    const latin = "b"; // plomb

    const [newLatin, newTransliteration] = bTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("");
  });

  describe("b followed by", () => {
    it("-s should return [p]", () => {
      const latin = "bsolu"; // absolu

      const [newLatin, newTransliteration] = bTransliteration(latin);

      expect(newLatin).toBe("solu");
      expect(newTransliteration).toBe("p");
    });

    it("-t should return [p]", () => {
      const latin = "btus"; // obtus

      const [newLatin, newTransliteration] = bTransliteration(latin);

      expect(newLatin).toBe("tus");
      expect(newTransliteration).toBe("p");
    });
  });
});

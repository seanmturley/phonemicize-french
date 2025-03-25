import bTransliteration from "./b-transliteration.ts";

describe("bTransliteration", () => {
  it("final b should be silent", () => {
    const latin = "b"; // plomb

    const [newLatin, newPrecedingLatin, newTransliteration] =
      bTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newPrecedingLatin).toBe("b");
    expect(newTransliteration).toBe("");
  });

  describe("initial or medial", () => {
    it("b should be [b]", () => {
      const latin = "beau";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        bTransliteration(latin);

      expect(newLatin).toBe("eau");
      expect(newPrecedingLatin).toBe("b");
      expect(newTransliteration).toBe("b");
    });

    it("bb should be [b]", () => {
      const latin = "bbesse"; // abbesse

      const [newLatin, newPrecedingLatin, newTransliteration] =
        bTransliteration(latin);

      expect(newLatin).toBe("esse");
      expect(newPrecedingLatin).toBe("bb");
      expect(newTransliteration).toBe("b");
    });
  });

  describe("b followed by", () => {
    it("-s should be [p]", () => {
      const latin = "bsolu"; // absolu

      const [newLatin, newPrecedingLatin, newTransliteration] =
        bTransliteration(latin);

      expect(newLatin).toBe("solu");
      expect(newPrecedingLatin).toBe("b");
      expect(newTransliteration).toBe("p");
    });

    it("-t should be [p]", () => {
      const latin = "btus"; // obtus

      const [newLatin, newPrecedingLatin, newTransliteration] =
        bTransliteration(latin);

      expect(newLatin).toBe("tus");
      expect(newPrecedingLatin).toBe("b");
      expect(newTransliteration).toBe("p");
    });
  });
});

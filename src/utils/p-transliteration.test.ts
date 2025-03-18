import pTransliteration from "./p-transliteration.ts";

describe("pTransliteration", () => {
  it("final p should be silent", () => {
    // Final p is always silent, except for the words trop and
    // beaucoup, which can produce a liaison with /p/.
    // There are few native words that end in p - it's possible
    // that foreign loan-word exceptions are the majority.
    const latin = "p"; // coup

    const [newLatin, newTransliteration] = pTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("");
  });

  it("ph should be [f]", () => {
    const latin = "philosophe"; // philosophe

    const [newLatin, newTransliteration] = pTransliteration(latin);

    expect(newLatin).toBe("ilosophe");
    expect(newTransliteration).toBe("f");
  });

  describe("initial or medial", () => {
    it("pp should be [p]", () => {
      const latin = "pport"; // support

      const [newLatin, newTransliteration] = pTransliteration(latin);

      expect(newLatin).toBe("ort");
      expect(newTransliteration).toBe("p");
    });

    it("p phould de [p]", () => {
      const latin = "ptive"; // captive

      const [newLatin, newTransliteration] = pTransliteration(latin);

      expect(newLatin).toBe("tive");
      expect(newTransliteration).toBe("p");
    });
  });
});

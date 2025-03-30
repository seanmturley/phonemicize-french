import pTransliteration from "./p-transliteration.ts";

describe("pTransliteration", () => {
  it("final p should be silent", () => {
    // Final p is always silent, except for the words trop and
    // beaucoup, which can produce a liaison with /p/.
    // There are few native words that end in p - it's possible
    // that foreign loan-word exceptions are the majority.

    const word = "coup";
    const index = 3;

    const [newTransliteration, newIndex] = pTransliteration(word, index);

    expect(newTransliteration).toBe("");
    expect(newIndex).toBe(4);
  });

  it("ph should be /f/", () => {
    const word = "philosophe";
    const index = 0;

    const [newTransliteration, newIndex] = pTransliteration(word, index);

    expect(newTransliteration).toBe("f");
    expect(newIndex).toBe(2);
  });

  describe("initial or medial", () => {
    it("pp should be /p/", () => {
      const word = "support";
      const index = 2;

      const [newTransliteration, newIndex] = pTransliteration(word, index);

      expect(newTransliteration).toBe("p");
      expect(newIndex).toBe(4);
    });

    it("p phould de /p/", () => {
      const word = "captive";
      const index = 2;

      const [newTransliteration, newIndex] = pTransliteration(word, index);

      expect(newTransliteration).toBe("p");
      expect(newIndex).toBe(3);
    });
  });
});

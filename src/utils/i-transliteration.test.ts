import iTransliteration from "./i-transliteration.ts";

describe("iTransliteration", () => {
  // Need to think about how to check for stressed vowels - can this be
  // done programmatically in a reliable way?
  // it("i before a stressed vowel should be /j/", () => {
  //   const word = "bien";
  //   const index = 1;

  //   const [newTransliteration, newIndex] = uTransliteration(word, index);

  //   expect(newTransliteration).toBe("j");
  //   expect(newIndex).toBe(2);
  // });

  it("î should be /i/", () => {
    const word = "île";
    const index = 0;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(1);
  });

  it("ï should be /i/", () => {
    const word = "haïr";
    const index = 2;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(3);
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("im should be /ɛ̃/", () => {
      const word = "timbre";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });

    it("in should be /ɛ̃/", () => {
      const word = "cinq";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });
  });

  it("final in should be /ɛ̃/", () => {
    const word = "brin";
    const index = 2;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ̃");
    expect(newIndex).toBe(4);
  });

  it("ill should be /ij/", () => {
    // This is essentially a fallback - there are specific rules for other
    // vowels followed by "ill", which results in a different vowel sound
    const word = "fille";
    const index = 1;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("ij");
    expect(newIndex).toBe(4);
  });

  it("otherwise i should be /i/", () => {
    const word = "finir";
    const index = 1;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(2);
  });
});

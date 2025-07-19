import iTransliteration from "./i.ts";

describe("iTransliteration", () => {
  it("î should be /i/", () => {
    const word = "île";
    const index = 0;

    const [newTransliteration, newIndex] = iTransliteration({ word, index });

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(1);
  });

  it("ï should be /i/", () => {
    const word = "haïr";
    const index = 2;

    const [newTransliteration, newIndex] = iTransliteration({ word, index });

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(3);
  });

  describe("ie", () => {
    it("final should be /i/", () => {
      const word = "amie";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(4);
    });

    it("with final s should be /i/", () => {
      const word = "amies";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(5);
    });

    // it("as part of final ient in 3rd person present indicative should be /i/", () => {
    //   // Requires checking lexicon metadata for verb/conjugation tags
    //   const word = "crient";
    //   const index = 2;

    //   const [newTransliteration, newIndex] = iTransliteration({word, index});

    //   expect(newTransliteration).toBe("i");
    //   expect(newIndex).toBe(6);
    // });

    it("before r[vowel] should be /i/", () => {
      const word = "crierai";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(4);
    });
  });

  describe("ii", () => {
    it("in the pattern <[consonant][rl]ii[pronounced_vowel]> should be /ij/", () => {
      // Note "pronounced vowel" is any vowel not part of the specific "ie"
      // graphemes handled above
      // Applies 1er group subjonctif présent conjugaison
      const word = "criions";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("ij");
      expect(newIndex).toBe(4);
    });

    it("otherwise should be /ii/", () => {
      // Mostly rare scientific words. "Shiitaké" is an exception.
      const word = "chiite";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("ii");
      expect(newIndex).toBe(4);
    });
  });

  it("i in the pattern <[consonant][rl]i[pronounced_vowel]> should be /ij/", () => {
    // Note "pronounced vowel" is any vowel not part of the specific <ie> or <ii>
    // graphemes handled above
    // Applies 1er group subjonctif présent conjugaison
    const word = "crier";
    const index = 2;

    const [newTransliteration, newIndex] = iTransliteration({ word, index });

    expect(newTransliteration).toBe("ij");
    expect(newIndex).toBe(3);
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("im should be /ɛ̃/", () => {
      const word = "timbre";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });

    it("in should be /ɛ̃/", () => {
      const word = "cinq";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });
  });

  it("final in should be /ɛ̃/", () => {
    const word = "brin";
    const index = 2;

    const [newTransliteration, newIndex] = iTransliteration({ word, index });

    expect(newTransliteration).toBe("ɛ̃");
    expect(newIndex).toBe(4);
  });

  describe("ill", () => {
    it("in a short list of exceptions should be /il/", () => {
      // See list of exception in ill-exceptions.ts
      const word = "ville";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("il");
      expect(newIndex).toBe(4);
    });

    it("but otherwise should be /ij/", () => {
      // This is essentially a fallback - there are specific rules for other
      // vowels followed by "ill", which results in a different vowel sound
      const word = "fille";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("ij");
      expect(newIndex).toBe(4);
    });
  });

  describe("otherise", () => {
    it("i before a vowel should be /j/", () => {
      const word = "aria";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("j");
      expect(newIndex).toBe(3);
    });

    it("i in any other situation should be /i/", () => {
      const word = "finir";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration({ word, index });

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(2);
    });
  });
});

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

  describe("ie", () => {
    it("final should be /i/", () => {
      const word = "amie";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(4);
    });

    it("with final s should be /i/", () => {
      const word = "amies";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(5);
    });

    // it("as part of final ient in 3rd person present indicative should be /i/", () => {
    //   // Requires checking lexicon metadata for verb/conjugation tags
    //   const word = "crient";
    //   const index = 2;

    //   const [newTransliteration, newIndex] = iTransliteration(word, index);

    //   expect(newTransliteration).toBe("i");
    //   expect(newIndex).toBe(6);
    // });

    it("before r[vowel] should be /i/", () => {
      const word = "crierai";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("i");
      expect(newIndex).toBe(4);
    });
  });

  describe("ien variations", () => {
    it("ien final should be /jɛ̃/", () => {
      const word = "bien";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("jɛ̃");
      expect(newIndex).toBe(4);
    });

    it("ien before a silent final consonant should be /jɛ̃/", () => {
      const word = "chiens";
      const index = 2;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("jɛ̃");
      expect(newIndex).toBe(5);
    });

    it("ienn should be /jɛn/", () => {
      const word = "mienne";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("jɛn");
      expect(newIndex).toBe(5);
    });
  });

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

  describe("ill", () => {
    it("in a short list of exceptions should be /il/", () => {
      // See list of exception in ill-exceptions.ts
      const word = "ville";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("il");
      expect(newIndex).toBe(4);
    });

    it("but otherwise should be /ij/", () => {
      // This is essentially a fallback - there are specific rules for other
      // vowels followed by "ill", which results in a different vowel sound
      const word = "fille";
      const index = 1;

      const [newTransliteration, newIndex] = iTransliteration(word, index);

      expect(newTransliteration).toBe("ij");
      expect(newIndex).toBe(4);
    });
  });

  it("otherwise i should be /i/", () => {
    const word = "finir";
    const index = 1;

    const [newTransliteration, newIndex] = iTransliteration(word, index);

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(2);
  });
});

import yTransliteration from "./y-transliteration.ts";

describe("yTransliteration", () => {
  it("initial y should be /j/", () => {
    const word = "yeux";
    const index = 0;

    const [newTransliteration, newIndex] = yTransliteration(word, index);

    expect(newTransliteration).toBe("j");
    expect(newIndex).toBe(1);
  });

  it("y between two vowels should be /j/", () => {
    const word = "royal";
    const index = 2;

    const [newTransliteration, newIndex] = yTransliteration(word, index);

    expect(newTransliteration).toBe("j");
    expect(newIndex).toBe(3);
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("yn should be /ɛ̃/", () => {
      const word = "lynx";
      const index = 1;

      const [newTransliteration, newIndex] = yTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });

    it("ym should be /ɛ̃/", () => {
      const word = "sympa";
      const index = 1;

      const [newTransliteration, newIndex] = yTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });
  });

  it("final ym should be /ɛ̃/", () => {
    const word = "thym";
    const index = 2;

    const [newTransliteration, newIndex] = yTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ̃");
    expect(newIndex).toBe(4);
  });

  describe("before a vowel, m, n, or h", () => {
    it("yn should be /in/", () => {
      const word = "cynique";
      const index = 1;

      const [newTransliteration, newIndex] = yTransliteration(word, index);

      expect(newTransliteration).toBe("in");
      expect(newIndex).toBe(3);
    });

    it("ym should be /im/", () => {
      const word = "hymne";
      const index = 1;

      const [newTransliteration, newIndex] = yTransliteration(word, index);

      expect(newTransliteration).toBe("im");
      expect(newIndex).toBe(3);
    });
  });

  it("y before a consonant excluding m and n should be /i/", () => {
    const word = "martyr";
    const index = 4;

    const [newTransliteration, newIndex] = yTransliteration(word, index);

    expect(newTransliteration).toBe("i");
    expect(newIndex).toBe(5);
  });
});

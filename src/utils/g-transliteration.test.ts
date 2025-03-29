import gTransliteration from "./g-transliteration.ts";

describe("gTransliteration", () => {
  describe("g followed by", () => {
    it("ueill should be [gœj]", () => {
      const word = "enorgueillir";
      const index = 4;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("gœj");
      expect(newIndex).toBe(10);
    });

    it("ueil should be [gœj]", () => {
      const word = "orgueil";
      const index = 2;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("gœj");
      expect(newIndex).toBe(7);
    });
  });

  describe("before a front vowel", () => {
    it("g should be [ʒ]", () => {
      const word = "sabotage";
      const index = 6;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("ʒ");
      expect(newIndex).toBe(7);
    });

    it("gg should be [gʒ]", () => {
      const word = "suggestion";
      const index = 2;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("gʒ");
      expect(newIndex).toBe(4);
    });

    it("gu should be [g]", () => {
      const word = "gigue";
      const index = 2;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("g");
      expect(newIndex).toBe(4);
    });
  });

  describe("NOT before a front vowel", () => {
    it("g should be [g]", () => {
      const word = "grave";
      const index = 0;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("g");
      expect(newIndex).toBe(1);
    });

    it("gg should be [g]", () => {
      const word = "aggraver";
      const index = 1;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("g");
      expect(newIndex).toBe(3);
    });

    it("ge should be [ʒ]", () => {
      const word = "pigeon";
      const index = 2;

      const [newTransliteration, newIndex] = gTransliteration(word, index);

      expect(newTransliteration).toBe("ʒ");
      expect(newIndex).toBe(4);
    });
  });

  it("gn should be [ɲ]", () => {
    const word = "compagnon";
    const index = 5;

    const [newTransliteration, newIndex] = gTransliteration(word, index);

    expect(newTransliteration).toBe("ɲ");
    expect(newIndex).toBe(7);
  });

  it("gt should be silent", () => {
    const word = "doigt";
    const index = 3;

    const [newTransliteration, newIndex] = gTransliteration(word, index);

    expect(newTransliteration).toBe("");
    expect(newIndex).toBe(5);
  });

  it("final g should be [g] in liaison, but otherwise silent", () => {
    // https://en.wikipedia.org/wiki/Liaison_(French)#Realization_of_liaison
    // Traditionally, a liaison with a word ending in -g was realized as /k/,
    // but this sounds dated in modern French. It is mostly popular to use
    // /.ɡ‿/ (long article /lɔ̃.ɡ‿aʁ.tikl/), or simply omit the liaison
    // (long article /lɔ̃. aʁ.tikl/).

    const word = "long";
    const index = 3;

    const [newTransliteration, newIndex] = gTransliteration(word, index);

    expect(newTransliteration).toBe("(g)");
    expect(newIndex).toBe(4);
  });
});

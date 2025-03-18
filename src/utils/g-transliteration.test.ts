import gTransliteration from "./g-transliteration.ts";

describe("gTransliteration", () => {
  describe("before a front vowel", () => {
    it("g should be [ʒ]", () => {
      const latin = "ge"; // sabotage

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("e");
      expect(newTransliteration).toBe("ʒ");
    });

    it("gg should be [gʒ]", () => {
      const latin = "ggestion"; // suggestion

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("estion");
      expect(newTransliteration).toBe("gʒ");
    });

    it("gu should be [g]", () => {
      const latin = "gue"; // gigue

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("e");
      expect(newTransliteration).toBe("g");
    });
  });

  describe("NOT before a front vowel", () => {
    it("g should be [g]", () => {
      const latin = "grave";

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("rave");
      expect(newTransliteration).toBe("g");
    });

    it("gg should be [g]", () => {
      const latin = "ggraver"; // aggraver

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("raver");
      expect(newTransliteration).toBe("g");
    });

    it("ge should be [ʒ]", () => {
      const latin = "geon"; // pigeon

      const [newLatin, newTransliteration] = gTransliteration(latin);

      expect(newLatin).toBe("on");
      expect(newTransliteration).toBe("ʒ");
    });
  });

  it("gn should be [ɲ]", () => {
    const latin = "gnon"; // compagnon

    const [newLatin, newTransliteration] = gTransliteration(latin);

    expect(newLatin).toBe("on");
    expect(newTransliteration).toBe("ɲ");
  });

  it("gt should be silent", () => {
    const latin = "gt"; // doigt

    const [newLatin, newTransliteration] = gTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("");
  });

  it("final g should be [g] in liaison, but otherwise silent", () => {
    // https://en.wikipedia.org/wiki/Liaison_(French)#Realization_of_liaison
    // Traditionally, a liaison with a word ending in -g was realized as /k/,
    // but this sounds dated in modern French. It is mostly popular to use
    // /.ɡ‿/ (long article /lɔ̃.ɡ‿aʁ.tikl/), or simply omit the liaison
    // (long article /lɔ̃. aʁ.tikl/).

    const latin = "g"; // long

    const [newLatin, newTransliteration] = gTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("(g)");
  });
});

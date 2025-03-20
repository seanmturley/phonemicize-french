import tTransliteration from "./t-transliteration.ts";

describe("tTransliteration", () => {
  it("final t should be [t] in liaison, but otherwise silent", () => {
    const latin = "t"; // tout

    const [newLatin, newTransliteration] = tTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("(t)");
  });

  describe("initial or medial", () => {
    it("t should be [t]", () => {
      const latin = "total";

      const [newLatin, newTransliteration] = tTransliteration(latin);

      expect(newLatin).toBe("otal");
      expect(newTransliteration).toBe("t");
    });

    it("tt should be [t]", () => {
      const latin = "tte"; // glotte

      const [newLatin, newTransliteration] = tTransliteration(latin);

      expect(newLatin).toBe("e");
      expect(newTransliteration).toBe("t");
    });
  });

  it("th should be [t]", () => {
    const latin = "Thomas";

    const [newLatin, newTransliteration] = tTransliteration(latin);

    expect(newLatin).toBe("omas");
    expect(newTransliteration).toBe("t");
  });

  describe("the ending", () => {
    it("tion should be [sjɔ̃]", () => {
      const latin = "tion"; //attention

      const [newLatin, newTransliteration] = tTransliteration(latin);

      expect(newLatin).toBe("");
      expect(newTransliteration).toBe("sjɔ̃");
    });

    it("tience should be [sjɑ̃s]", () => {
      const latin = "tience"; // patience

      const [newLatin, newTransliteration] = tTransliteration(latin);

      expect(newLatin).toBe("");
      expect(newTransliteration).toBe("sjɑ̃s");
    });
  });
});

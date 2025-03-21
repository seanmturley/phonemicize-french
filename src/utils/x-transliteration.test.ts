import xTransliteration from "./x-transliteration.ts";

describe("xTransliteration", () => {
  it("final x should be [z] in liaison, but otherwise silent", () => {
    // Note exceptions for six and dix:
    // - [s] independently
    // - [z] before a modified word starting with a vowel or h-muet
    // - silent before a modified word starting with a consonant
    //   (including h-aspiré)

    const latin = "x"; // faux

    const [newLatin, newTransliteration] = xTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("(z)");
  });

  it("xh should be [gz]", () => {
    const latin = "xhume"; // exhume

    const [newLatin, newTransliteration] = xTransliteration(latin);

    expect(newLatin).toBe("ume");
    expect(newTransliteration).toBe("gz");
  });

  describe("x before", () => {
    it("a consonant (excluding h) should be [ks]", () => {
      const latin = "xte"; // texte

      const [newLatin, newTransliteration] = xTransliteration(latin);

      expect(newLatin).toBe("te");
      expect(newTransliteration).toBe("ks");
    });

    it("a vowel should be [gz]", () => {
      // Note exceptions for:
      // - (*-)deuxième*, (*-)sixième*, (*-)dixième* (becomes [z])

      const latin = "xemple"; // exemple

      const [newLatin, newTransliteration] = xTransliteration(latin);

      expect(newLatin).toBe("emple");
      expect(newTransliteration).toBe("gz");
    });
  });
});

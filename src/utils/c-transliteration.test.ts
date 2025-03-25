import cTransliteration from "./c-transliteration.ts";

describe("cTransliteration", () => {
  describe("final", () => {
    it("c should be [k]", () => {
      const latin = "c"; // parc
      const precedingLatin = "par";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("");
      expect(newPrecedingLatin).toBe("c");
      expect(newTransliteration).toBe("k");
    });

    it("c after n should silent", () => {
      const latin = "c"; // blanc
      const precedingLatin = "blan";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("");
      expect(newPrecedingLatin).toBe("c");
      expect(newTransliteration).toBe("");
    });

    it("ct should be [kt]", () => {
      // Note exceptions where final 'ct' is silent e.g. respect

      const latin = "ct"; // direct
      const precedingLatin = "dire";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("");
      expect(newPrecedingLatin).toBe("ct");
      expect(newTransliteration).toBe("kt");
    });
  });

  describe("before a front vowel", () => {
    it("c should should be [s]", () => {
      const latin = "ciel"; // ciel
      const precedingLatin = "";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("iel");
      expect(newPrecedingLatin).toBe("c");
      expect(newTransliteration).toBe("s");
    });

    it("cc should should be [ks]", () => {
      const latin = "ccent"; // accent
      const precedingLatin = "a";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("ent");
      expect(newPrecedingLatin).toBe("cc");
      expect(newTransliteration).toBe("ks");
    });
  });

  describe("before a back vowel or consonant", () => {
    it("c should should be [k]", () => {
      const latin = "core"; // encore
      const precedingLatin = "en";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("ore");
      expect(newPrecedingLatin).toBe("c");
      expect(newTransliteration).toBe("k");
    });

    it("cc should should be [k]", () => {
      const latin = "ccru"; // accru
      const precedingLatin = "a";

      const [newLatin, newPrecedingLatin, newTransliteration] =
        cTransliteration(latin, precedingLatin);

      expect(newLatin).toBe("ru");

      expect(newPrecedingLatin).toBe("cc");
      expect(newTransliteration).toBe("k");
    });
  });

  it("ch should be [ʃ]", () => {
    // Note exception for words of Greek origin pronounced [k]
    // e.g. Christ

    const latin = "che"; // blanche
    const precedingLatin = "blan";

    const [newLatin, newPrecedingLatin, newTransliteration] = cTransliteration(
      latin,
      precedingLatin
    );

    expect(newLatin).toBe("e");

    expect(newPrecedingLatin).toBe("ch");
    expect(newTransliteration).toBe("ʃ");
  });

  it("cqu should be [k]", () => {
    const latin = "cquisition"; // acquisition
    const precedingLatin = "a";

    const [newLatin, newPrecedingLatin, newTransliteration] = cTransliteration(
      latin,
      precedingLatin
    );

    expect(newLatin).toBe("isition");

    expect(newPrecedingLatin).toBe("cqu");
    expect(newTransliteration).toBe("k");
  });

  it("ç should be [s]", () => {
    const latin = "çon"; // garçon
    const precedingLatin = "gar";

    const [newLatin, newPrecedingLatin, newTransliteration] = cTransliteration(
      latin,
      precedingLatin
    );

    expect(newLatin).toBe("on");
    expect(newPrecedingLatin).toBe("ç");
    expect(newTransliteration).toBe("s");
  });
});

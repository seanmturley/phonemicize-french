import cTransliteration from "./c-transliteration.ts";

describe("cTransliteration", () => {
  describe("final", () => {
    it("c should be [k]", () => {
      const latin = "c"; // parc

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("");
      expect(newTransliteration).toBe("k");
    });

    // it("c after n should silent", () => {
    //   const latin = "c"; // blanc

    //   const [newLatin, newTransliteration] = cTransliteration(latin);

    //   expect(newLatin).toBe("");
    //   expect(newTransliteration).toBe("");
    // });

    it("ct should be [kt]", () => {
      // Note exceptions where final 'ct' is silent e.g. respect

      const latin = "ct"; // direct

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("");
      expect(newTransliteration).toBe("kt");
    });
  });

  describe("before a front vowel", () => {
    it("c should should be [s]", () => {
      const latin = "ciel"; // ciel

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("iel");
      expect(newTransliteration).toBe("s");
    });

    it("cc should should be [ks]", () => {
      const latin = "ccent"; // accent

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("ent");
      expect(newTransliteration).toBe("ks");
    });
  });

  describe("before a back vowel or consonant", () => {
    it("c should should be [k]", () => {
      const latin = "core"; // encore

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("ore");
      expect(newTransliteration).toBe("k");
    });

    it("cc should should be [k]", () => {
      const latin = "ccru"; // accru

      const [newLatin, newTransliteration] = cTransliteration(latin);

      expect(newLatin).toBe("ru");
      expect(newTransliteration).toBe("k");
    });
  });

  it("ch should be [ʃ]", () => {
    // Note exception for words of Greek origin pronounced [k]
    // e.g. Christ

    const latin = "che"; // blanche

    const [newLatin, newTransliteration] = cTransliteration(latin);

    expect(newLatin).toBe("e");
    expect(newTransliteration).toBe("ʃ");
  });

  it("cqu should be [k]", () => {
    const latin = "cquisition"; // acquisition

    const [newLatin, newTransliteration] = cTransliteration(latin);

    expect(newLatin).toBe("isition");
    expect(newTransliteration).toBe("k");
  });

  it("ç should be [s]", () => {
    const latin = "çon"; // garçon

    const [newLatin, newTransliteration] = cTransliteration(latin);

    expect(newLatin).toBe("on");
    expect(newTransliteration).toBe("s");
  });
});

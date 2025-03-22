import sTransliteration from "./s-transliteration.ts";

describe("sTransliteration", () => {
  it("final s should be [z] in liaison, but otherwise silent", () => {
    // Note exceptions e.g. hélas, lis, fils

    const latin = "s"; // mes

    const [newLatin, newTransliteration] = sTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("(z)");
  });

  describe("single s", () => {
    // transliterateWord needs reworking to check preceeding letters
    // it("between vowels should be [z]", () => {
    //   const latin = ""; // maison

    //   const [newLatin, newTransliteration] = sTransliteration(latin);

    //   expect(newLatin).toBe("on");
    //   expect(newTransliteration).toBe("z");
    // });

    it("not between vowels should be [s]", () => {
      const latin = "scandale"; // scandale

      const [newLatin, newTransliteration] = sTransliteration(latin);

      expect(newLatin).toBe("andale");
      expect(newTransliteration).toBe("sk");
    });
  });

  it("ss should be [s]", () => {
    const latin = "sse"; // agasse

    const [newLatin, newTransliteration] = sTransliteration(latin);

    expect(newLatin).toBe("e");
    expect(newTransliteration).toBe("s");
  });

  describe("sc before", () => {
    it("a front vowel should be [s]", () => {
      const latin = "scendre"; // descendre

      const [newLatin, newTransliteration] = sTransliteration(latin);

      expect(newLatin).toBe("endre");
      expect(newTransliteration).toBe("s");
    });

    it("a back vowel or consonant should be [sk]", () => {
      const latin = "scandale"; // scandale

      const [newLatin, newTransliteration] = sTransliteration(latin);

      expect(newLatin).toBe("andale");
      expect(newTransliteration).toBe("sk");
    });
  });

  it("sch should be [ʃ]", () => {
    const latin = "schéma"; // schéma

    const [newLatin, newTransliteration] = sTransliteration(latin);

    expect(newLatin).toBe("éma");
    expect(newTransliteration).toBe("ʃ");
  });
});

import rTransliteration from "./r-transliteration.ts";

describe("rTransliteration", () => {
  it("medial rr should should be [ʁ]", () => {
    const latin = "rrible"; // terrible

    const [newLatin, newTransliteration] = rTransliteration(latin);

    expect(newLatin).toBe("ible");
    expect(newTransliteration).toBe("ʁ");
  });

  it("initial or medial r should be [ʁ]", () => {
    const latin = "rapide"; // rapide

    const [newLatin, newTransliteration] = rTransliteration(latin);

    expect(newLatin).toBe("apide");
    expect(newTransliteration).toBe("ʁ");
  });
});

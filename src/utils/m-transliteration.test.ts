import mTransliteration from "./m-transliteration.ts";

describe("mTransliteration", () => {
  // NOTE: m as a marker of a nasal vowel is handled by vowel
  // transliteration functions.
  it("mm should be [m]", () => {
    const latin = "mme"; // flamme

    const [newLatin, newTransliteration] = mTransliteration(latin);

    expect(newLatin).toBe("e");
    expect(newTransliteration).toBe("m");
  });

  it("m should be [m]", () => {
    const latin = "mardi"; // mardi

    const [newLatin, newTransliteration] = mTransliteration(latin);

    expect(newLatin).toBe("ardi");
    expect(newTransliteration).toBe("m");
  });
});

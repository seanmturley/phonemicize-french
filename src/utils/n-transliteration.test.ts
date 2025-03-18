import nTransliteration from "./n-transliteration.ts";

describe("nTransliteration", () => {
  // NOTE: n as a marker of a nasal vowel is handled by vowel
  // transliteration functions.
  it("nn should be [n]", () => {
    const latin = "nnée"; // année

    const [newLatin, newTransliteration] = nTransliteration(latin);

    expect(newLatin).toBe("ée");
    expect(newTransliteration).toBe("n");
  });

  it("n should be [n]", () => {
    const latin = "neige"; // neige

    const [newLatin, newTransliteration] = nTransliteration(latin);

    expect(newLatin).toBe("eige");
    expect(newTransliteration).toBe("n");
  });
});

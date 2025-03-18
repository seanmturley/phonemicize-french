import lTransliteration from "./l-transliteration.ts";

describe("lTransliteration", () => {
  // NOTE: There are several graphemes with il* that are handled by
  // the iTransliteration function.
  it("ll should be [l]", () => {
    const latin = "llet"; // ballet

    const [newLatin, newTransliteration] = lTransliteration(latin);

    expect(newLatin).toBe("et");
    expect(newTransliteration).toBe("l");
  });

  it("l should be [l]", () => {
    const latin = "large"; // large

    const [newLatin, newTransliteration] = lTransliteration(latin);

    expect(newLatin).toBe("arge");
    expect(newTransliteration).toBe("l");
  });
});

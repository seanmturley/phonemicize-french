import lTransliteration from "./l-transliteration.ts";

describe("lTransliteration", () => {
  // NOTE: There are several graphemes with il* that are handled by
  // the iTransliteration function.
  it("l with elision should be /ʒ/", () => {
    const word = "l'homme";
    const index = 0;

    const [newTransliteration, newIndex] = lTransliteration(word, index);

    expect(newTransliteration).toBe("l");
    expect(newIndex).toBe(1);
  });

  it("ll should be /l/", () => {
    const word = "ballet";
    const index = 2;

    const [newTransliteration, newIndex] = lTransliteration(word, index);

    expect(newTransliteration).toBe("l");
    expect(newIndex).toBe(4);
  });

  it("l should be /l/", () => {
    const word = "large";
    const index = 0;

    const [newTransliteration, newIndex] = lTransliteration(word, index);

    expect(newTransliteration).toBe("l");
    expect(newIndex).toBe(1);
  });
});

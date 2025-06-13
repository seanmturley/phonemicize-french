import mTransliteration from "./m.ts";

describe("mTransliteration", () => {
  // NOTE: m as a marker of a nasal vowel is handled by vowel
  // transliteration functions.

  it("m with elision should be /ʒ/", () => {
    const word = "m'a";
    const index = 0;

    const [newTransliteration, newIndex] = mTransliteration(word, index);

    expect(newTransliteration).toBe("m");
    expect(newIndex).toBe(1);
  });

  it("mm should be /m/", () => {
    const word = "flamme";
    const index = 3;

    const [newTransliteration, newIndex] = mTransliteration(word, index);

    expect(newTransliteration).toBe("m");
    expect(newIndex).toBe(5);
  });

  it("m should be /m/", () => {
    const word = "mardi";
    const index = 0;

    const [newTransliteration, newIndex] = mTransliteration(word, index);

    expect(newTransliteration).toBe("m");
    expect(newIndex).toBe(1);
  });
});

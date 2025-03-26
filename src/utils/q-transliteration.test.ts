import qTransliteration from "./q-transliteration.ts";

describe("qTransliteration", () => {
  it("final q should be [k]", () => {
    const word = "cinq";
    const index = 3;

    const [newTransliteration, newIndex] = qTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(4);
  });

  it("qu should be [k]", () => {
    const word = "liqueur";
    const index = 2;

    const [newTransliteration, newIndex] = qTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(4);
  });
});

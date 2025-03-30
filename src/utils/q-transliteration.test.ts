import qTransliteration from "./q-transliteration.ts";

describe("qTransliteration", () => {
  it("final q should be /k/", () => {
    const word = "cinq";
    const index = 3;

    const [newTransliteration, newIndex] = qTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(4);
  });

  it("qu should be /k/", () => {
    const word = "quel";
    const index = 0;

    const [newTransliteration, newIndex] = qTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(2);
  });
});

import rTransliteration from "./r-transliteration.ts";

describe("rTransliteration", () => {
  it("medial rr should should be /ʁ/", () => {
    const word = "terrible";
    const index = 2;

    const [newTransliteration, newIndex] = rTransliteration(word, index);

    expect(newTransliteration).toBe("ʁ");
    expect(newIndex).toBe(4);
  });

  it("initial or medial r should be /ʁ/", () => {
    const word = "rapide";
    const index = 0;

    const [newTransliteration, newIndex] = rTransliteration(word, index);

    expect(newTransliteration).toBe("ʁ");
    expect(newIndex).toBe(1);
  });
});

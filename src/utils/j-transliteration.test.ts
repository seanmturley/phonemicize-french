import jTransliteration from "./j-transliteration.ts";

describe("jTransliteration", () => {
  it("j should be [ʒ]", () => {
    const word = "jardin";
    const index = 0;

    const [newTransliteration, newIndex] = jTransliteration(word, index);

    expect(newTransliteration).toBe("ʒ");
    expect(newIndex).toBe(1);
  });
});

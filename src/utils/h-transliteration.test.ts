import hTransliteration from "./h-transliteration.ts";

describe("hTransliteration", () => {
  it("h 'aspiré', should be silent and not allow liaison or elision", () => {
    const word = "hideuse";
    const index = 0;

    const [newTransliteration, newIndex] = hTransliteration(word, index);

    expect(newTransliteration).toBe("h");
    expect(newIndex).toBe(1);
  });

  it("h 'muet' or medial should be silent", () => {
    const word = "heure";
    const index = 0;

    const [newTransliteration, newIndex] = hTransliteration(word, index);

    expect(newTransliteration).toBe("");
    expect(newIndex).toBe(1);
  });
});

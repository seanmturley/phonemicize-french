import hTransliteration from "./h-transliteration.ts";

describe("hTransliteration", () => {
  it("h 'aspiré', should be silent and not allow liaison or elision", () => {
    const latin = "hideuse"; // hideuse

    const [newLatin, newTransliteration] = hTransliteration(latin);

    expect(newLatin).toBe("ideuse");
    expect(newTransliteration).toBe("h");
  });

  it("h 'muet' or medial should be silent", () => {
    const latin = "heure"; // heure

    const [newLatin, newTransliteration] = hTransliteration(latin);

    expect(newLatin).toBe("eure");
    expect(newTransliteration).toBe("");
  });
});

import jTransliteration from "./j-transliteration.ts";

describe("jTransliteration", () => {
  it("j should be [ʒ]", () => {
    const latin = "jardin"; // jardin

    const [newLatin, newTransliteration] = jTransliteration(latin);

    expect(newLatin).toBe("ardin");
    expect(newTransliteration).toBe("ʒ");
  });
});

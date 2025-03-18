import kTransliteration from "./k-transliteration.ts";

describe("kTransliteration", () => {
  it("k should be [k]", () => {
    const latin = "kilo"; // kilo

    const [newLatin, newTransliteration] = kTransliteration(latin);

    expect(newLatin).toBe("ilo");
    expect(newTransliteration).toBe("k");
  });
});

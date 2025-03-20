import vTransliteration from "./v-transliteration.ts";

describe("vTransliteration", () => {
  it("v should be [v]", () => {
    const latin = "venir"; //souvenir

    const [newLatin, newTransliteration] = vTransliteration(latin);

    expect(newLatin).toBe("enir");
    expect(newTransliteration).toBe("v");
  });
});

import qTransliteration from "./q-transliteration.ts";

describe("qTransliteration", () => {
  it("final q should be [k]", () => {
    const latin = "q"; // cinq

    const [newLatin, newTransliteration] = qTransliteration(latin);

    expect(newLatin).toBe("");
    expect(newTransliteration).toBe("k");
  });

  it("qu should be [k]", () => {
    const latin = "queur"; //liqueur

    const [newLatin, newTransliteration] = qTransliteration(latin);

    expect(newLatin).toBe("eur");
    expect(newTransliteration).toBe("k");
  });
});

import wTransliteration from "./w-transliteration.ts";

describe("wTransliteration", () => {
  it("w should be [w]", () => {
    // Note "clown" as an exception, rendered as [klun]

    const latin = "wi"; // kiwi

    const [newLatin, newTransliteration] = wTransliteration(latin);

    expect(newLatin).toBe("i");
    expect(newTransliteration).toBe("w");
  });
});

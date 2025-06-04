import transliterateLexicalUnit from "./transliterateLexicalUnit.ts";

describe("transliterateLexicalUnit", () => {
  it("should return a transliteration of capitalized words", () => {
    const result = transliterateLexicalUnit("France");

    expect(result).toBe("fʁɑ̃s(ə)");
  });

  it("should return a transliteration of unhyphenated words", () => {
    const result = transliterateLexicalUnit("oui");

    expect(result).toBe("wi");
  });
});

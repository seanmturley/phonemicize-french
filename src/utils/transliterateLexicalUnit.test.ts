import transliterateLexicalUnit from "./transliterateLexicalUnit.ts";

describe("transliterateLexicalUnit", () => {
  it("should return a transliteration of unhyphenated words", () => {
    const result = transliterateLexicalUnit("oui");

    expect(result).toBe("wi");
  });
});

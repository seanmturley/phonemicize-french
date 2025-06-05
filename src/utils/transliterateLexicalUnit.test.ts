import transliterateLexicalUnit from "./transliterateLexicalUnit.ts";

describe("transliterateLexicalUnit", () => {
  it("should return a transliteration of words containing capital letters", () => {
    const result = transliterateLexicalUnit("France");

    expect(result).toBe("fʁɑ̃s(ə)");
  });

  it("should return a transliteration of unhyphenated words", () => {
    const result = transliterateLexicalUnit("oui");

    expect(result).toBe("wi");
  });

  it("should return a transliteration of hyphenated words", () => {
    const result = transliterateLexicalUnit("Château-Thierry");

    expect(result).toBe("ʃɑto-tjɛʁi");
  });
});

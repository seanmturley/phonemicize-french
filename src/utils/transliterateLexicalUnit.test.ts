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

  it("should return a transliteration of hyphenated words without liaison", () => {
    const result = transliterateLexicalUnit("Château-Thierry");

    expect(result).toBe("ʃɑto-tjɛʁi");
  });

  it("should correctly transliterate hyphenated words with pronounced liaison", () => {
    const result = transliterateLexicalUnit("grand-angle");

    expect(result).toBe("gʁɑ̃t-ɑ̃gl(ə)");
  });
});

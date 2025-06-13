import kTransliteration from "./k.ts";

describe("kTransliteration", () => {
  it("k should be /k/", () => {
    const word = "kilo";
    const index = 0;

    const [newTransliteration, newIndex] = kTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(1);
  });
});

import vTransliteration from "./v.ts";

describe("vTransliteration", () => {
  it("v should be /v/", () => {
    const word = "souvenir";
    const index = 3;

    const [newTransliteration, newIndex] = vTransliteration(word, index);

    expect(newTransliteration).toBe("v");
    expect(newIndex).toBe(4);
  });
});

import jTransliteration from "./j.ts";

describe("jTransliteration", () => {
  it("j with elision should be /ʒ/", () => {
    const word = "j'ai";
    const index = 0;

    const [newTransliteration, newIndex] = jTransliteration({ word, index });

    expect(newTransliteration).toBe("ʒ");
    expect(newIndex).toBe(1);
  });

  it("j should be /ʒ/", () => {
    const word = "jardin";
    const index = 0;

    const [newTransliteration, newIndex] = jTransliteration({ word, index });

    expect(newTransliteration).toBe("ʒ");
    expect(newIndex).toBe(1);
  });
});

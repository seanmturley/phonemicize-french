import bTransliteration from "./b.ts";

describe("bTransliteration", () => {
  it("final b should be silent", () => {
    const word = "plomb";
    const index = 4;

    const [newTransliteration, newIndex] = bTransliteration({ word, index });

    expect(newTransliteration).toBe("");
    expect(newIndex).toBe(5);
  });

  describe("initial or medial", () => {
    it("b should be /b/", () => {
      const word = "beau";
      const index = 0;

      const [newTransliteration, newIndex] = bTransliteration({ word, index });

      expect(newTransliteration).toBe("b");
      expect(newIndex).toBe(1);
    });

    it("bb should be /b/", () => {
      const word = "abbesse";
      const index = 1;

      const [newTransliteration, newIndex] = bTransliteration({ word, index });

      expect(newTransliteration).toBe("b");
      expect(newIndex).toBe(3);
    });
  });

  describe("b followed by", () => {
    it("-s should be /p/", () => {
      const word = "absolu";
      const index = 1;

      const [newTransliteration, newIndex] = bTransliteration({ word, index });

      expect(newTransliteration).toBe("p");
      expect(newIndex).toBe(2);
    });

    it("-t should be /p/", () => {
      const word = "obtus";
      const index = 1;

      const [newTransliteration, newIndex] = bTransliteration({ word, index });

      expect(newTransliteration).toBe("p");
      expect(newIndex).toBe(2);
    });
  });
});

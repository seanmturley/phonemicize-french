import nTransliteration from "./n.ts";

describe("nTransliteration", () => {
  // NOTE: n as a marker of a nasal vowel is handled by vowel
  // transliteration functions.

  it("n with elision should be /ʒ/", () => {
    const word = "n'avait";
    const index = 0;

    const [newTransliteration, newIndex] = nTransliteration({ word, index });

    expect(newTransliteration).toBe("n");
    expect(newIndex).toBe(1);
  });

  it("nn should be /n/", () => {
    const word = "année";
    const index = 1;

    const [newTransliteration, newIndex] = nTransliteration({ word, index });

    expect(newTransliteration).toBe("n");
    expect(newIndex).toBe(3);
  });

  it("n should be /n/", () => {
    const word = "neige";
    const index = 0;

    const [newTransliteration, newIndex] = nTransliteration({ word, index });

    expect(newTransliteration).toBe("n");
    expect(newIndex).toBe(1);
  });
});

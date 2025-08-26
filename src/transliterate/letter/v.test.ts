import vTransliteration from "./v.ts";

describe("vTransliteration", () => {
  it("final ville should be /vil(ə)/", () => {
    // The Spanish city of Séville is an exception
    const word = "Bonneville";
    const index = 5;

    const [newTransliteration, newIndex] = vTransliteration({ word, index });

    expect(newTransliteration).toBe("vil(ə)");
    expect(newIndex).toBe(10);
  });

  it("v should be /v/", () => {
    const word = "souvenir";
    const index = 3;

    const [newTransliteration, newIndex] = vTransliteration({ word, index });

    expect(newTransliteration).toBe("v");
    expect(newIndex).toBe(4);
  });
});

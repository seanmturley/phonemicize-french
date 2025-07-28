import wTransliteration from "./w.ts";

describe("wTransliteration", () => {
  it("w should be /w/", () => {
    // Note "clown" as an exception, rendered as /klun/

    const word = "kiwi";
    const index = 2;

    const [newTransliteration, newIndex] = wTransliteration({ word, index });

    expect(newTransliteration).toBe("w");
    expect(newIndex).toBe(3);
  });
});

import cTransliteration from "./c-transliteration.ts";

describe("cTransliteration", () => {
  describe("cc followed by", () => {
    it("ueill should be /kœj/", () => {
      const word = "accueillir";
      const index = 1;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("kœj");
      expect(newIndex).toBe(8);
    });

    it("ueil should be /kœj/", () => {
      const word = "accueil";
      const index = 1;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("kœj");
      expect(newIndex).toBe(7);
    });
  });

  describe("c followed by", () => {
    it("ueill should be /kœj/", () => {
      const word = "cueillir";
      const index = 0;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("kœj");
      expect(newIndex).toBe(6);
    });

    it("ueil should be /kœj/", () => {
      const word = "écueil";
      const index = 1;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("kœj");
      expect(newIndex).toBe(6);
    });
  });

  describe("final", () => {
    it("c should be /k/", () => {
      const word = "parc";
      const index = 3;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("k");
      expect(newIndex).toBe(4);
    });

    it("c after n should silent", () => {
      const word = "blanc";
      const index = 4;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("");
      expect(newIndex).toBe(5);
    });

    it("ct should be /kt/", () => {
      // Note exceptions where final 'ct' is silent e.g. respect

      const word = "direct";
      const index = 4;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("kt");
      expect(newIndex).toBe(6);
    });
  });

  describe("before a front vowel", () => {
    it("c should be /s/", () => {
      const word = "ciel";
      const index = 0;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("s");
      expect(newIndex).toBe(1);
    });

    it("cc should be /ks/", () => {
      const word = "accent";
      const index = 1;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("ks");
      expect(newIndex).toBe(3);
    });
  });

  describe("before a back vowel or consonant", () => {
    it("c should be /k/", () => {
      const word = "encore";
      const index = 2;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("k");
      expect(newIndex).toBe(3);
    });

    it("cc should be /k/", () => {
      const word = "accru";
      const index = 1;

      const [newTransliteration, newIndex] = cTransliteration(word, index);

      expect(newTransliteration).toBe("k");
      expect(newIndex).toBe(3);
    });
  });

  it("ch should be /ʃ/", () => {
    // Note exception for words of Greek origin pronounced /k/
    // e.g. Christ

    const word = "blanche";
    const index = 4;

    const [newTransliteration, newIndex] = cTransliteration(word, index);

    expect(newTransliteration).toBe("ʃ");
    expect(newIndex).toBe(6);
  });

  it("cqu should be /k/", () => {
    const word = "acquisition";
    const index = 1;

    const [newTransliteration, newIndex] = cTransliteration(word, index);

    expect(newTransliteration).toBe("k");
    expect(newIndex).toBe(4);
  });

  it("ç should be /s/", () => {
    const word = "garçon";
    const index = 3;

    const [newTransliteration, newIndex] = cTransliteration(word, index);

    expect(newTransliteration).toBe("s");
    expect(newIndex).toBe(4);
  });
});

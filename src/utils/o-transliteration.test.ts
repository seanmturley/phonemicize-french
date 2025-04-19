import oTransliteration from "./o-transliteration.ts";

describe("oTransliteration", () => {
  // Need to think about how to check for stressed vowels - can this be
  // done programmatically in a reliable way?
  // it("ou before a stressed vowel should be /w/", () => {
  //   const word = "oui";
  //   const index = 0;

  //   const [newTransliteration, newIndex] = uTransliteration(word, index);

  //   expect(newTransliteration).toBe("w");
  //   expect(newIndex).toBe(2);
  // });

  it("ô should be /o/", () => {
    const word = "hôte";
    const index = 1;

    const [newTransliteration, newIndex] = oTransliteration(word, index);

    expect(newTransliteration).toBe("o");
    expect(newIndex).toBe(2);
  });

  // oe and oeu different to œ?
  describe("œ", () => {
    it("followed by u as a final sound should be /ø/", () => {
      const word = "nœud";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ø");
      expect(newIndex).toBe(3);
    });

    it("followed by u in the interior of a word should be /œ/", () => {
      const word = "sœur";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(3);
    });

    it("final followed by il should be /œj/", () => {
      const word = "œil";
      const index = 0;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(3);
    });

    it("followed by ill should be /œj/", () => {
      const word = "œillade";
      const index = 0;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(4);
    });

    it("otherwise should be /e/", () => {
      const word = "fœtus";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("e");
      expect(newIndex).toBe(2);
    });
  });

  describe("oe", () => {
    // Supporting non-standard variation of œ
    it("followed by u as a final sound should be /ø/", () => {
      const word = "noeud";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ø");
      expect(newIndex).toBe(4);
    });

    it("followed by u should be /œ/", () => {
      const word = "soeur";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(4);
    });

    it("final followed by il should be /œj/", () => {
      const word = "oeil";
      const index = 0;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(4);
    });

    it("followed by ill should be /œj/", () => {
      const word = "oeillade";
      const index = 0;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(5);
    });
  });

  describe("oi", () => {
    it("final followed by n should be /wɛ̃/", () => {
      const word = "loin";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("wɛ̃");
      expect(newIndex).toBe(4);
    });

    it("followed by n before a consonant should be /wɛ̃/", () => {
      const word = "moins";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("wɛ̃");
      expect(newIndex).toBe(4);
    });

    it("otherwise should be /wa/", () => {
      const word = "voix";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("wa");
      expect(newIndex).toBe(3);
    });
  });

  it("oy should be /waj/", () => {
    const word = "loyer";
    const index = 1;

    const [newTransliteration, newIndex] = oTransliteration(word, index);

    expect(newTransliteration).toBe("waj");
    expect(newIndex).toBe(3);
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("om should be /ɔ̃/", () => {
      const word = "bombe";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ɔ̃");
      expect(newIndex).toBe(3);
    });

    it("on should be /ɔ̃/", () => {
      const word = "blond";
      const index = 2;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ɔ̃");
      expect(newIndex).toBe(4);
    });
  });

  describe("final", () => {
    it("om should be /ɔ̃/", () => {
      const word = "nom";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ɔ̃");
      expect(newIndex).toBe(3);
    });

    it("on should be /ɔ̃/", () => {
      const word = "non";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("ɔ̃");
      expect(newIndex).toBe(3);
    });
  });

  describe("ou variations", () => {
    // Need to think about how to check for stressed vowels - can this be
    // done programmatically in a reliable way?
    // it("ou before a stressed vowel should be /w/", () => {
    //   const word = "oui";
    //   const index = 0;

    //   const [newTransliteration, newIndex] = uTransliteration(word, index);

    //   expect(newTransliteration).toBe("w");
    //   expect(newIndex).toBe(2);
    // });

    it("ou should be /u/", () => {
      const word = "vous";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("u");
      expect(newIndex).toBe(3);
    });

    it("où should be /u/", () => {
      const word = "où";
      const index = 0;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("u");
      expect(newIndex).toBe(2);
    });

    it("oû should be /u/", () => {
      const word = "goût";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("u");
      expect(newIndex).toBe(3);
    });

    it("ouill should be /uj/", () => {
      const word = "bouillir";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("uj");
      expect(newIndex).toBe(6);
    });

    it("final ouil should be /uj/", () => {
      const word = "fenouil";
      const index = 3;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("uj");
      expect(newIndex).toBe(7);
    });
  });

  describe("o when the final phoneme should be /o/", () => {
    it("as when final", () => {
      const word = "ado";
      const index = 2;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("o");
      expect(newIndex).toBe(3);
    });

    it("as when before a silent letter", () => {
      const word = "mot";
      const index = 1;

      const [newTransliteration, newIndex] = oTransliteration(word, index);

      expect(newTransliteration).toBe("o");
      expect(newIndex).toBe(2);
    });
  });

  it("o before s pronounced as /z/ should be /o/", () => {
    // There seem to be some exceptions to this, but they're rare words
    // e.g. mosette
    // s is realised as /z/ between vowels
    const word = "rose";
    const index = 1;

    const [newTransliteration, newIndex] = oTransliteration(word, index);

    expect(newTransliteration).toBe("o");
    expect(newIndex).toBe(2);
  });

  it("otherwise o should be /ɔ/", () => {
    const word = "doter";
    const index = 1;

    const [newTransliteration, newIndex] = oTransliteration(word, index);

    expect(newTransliteration).toBe("ɔ");
    expect(newIndex).toBe(2);
  });
});

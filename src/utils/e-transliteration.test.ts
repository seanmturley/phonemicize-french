import eTransliteration from "./e-transliteration.ts";

describe("eTransliteration", () => {
  it("é should be /e/", () => {
    const word = "été";
    const index = 0;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("e");
    expect(newIndex).toBe(1);
  });

  it("è should be /ɛ/", () => {
    const word = "père";
    const index = 1;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(2);
  });

  it("ë should be /ɛ/", () => {
    const word = "Noël";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(3);
  });

  // it("ê should be /ɛː/", () => {
  //   // Probably? Need to figure out long vowels
  //   // Apparently doesn't apply to "pret":
  //   // https://fr.wiktionary.org/wiki/Annexe:Prononciation/fran%C3%A7ais#Fran%C3%A7ais_moderne_traditionnel
  //   // So perhaps vowel only lengthened before a pronounced consonant?
  //   const word = "tête";
  //   const index = 1;

  //   const [newTransliteration, newIndex] = eTransliteration(word, index);

  //   expect(newTransliteration).toBe("ɛː");
  //   expect(newIndex).toBe(2);
  // });

  it("eau should be /o/", () => {
    const word = "beau";
    const index = 1;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("o");
    expect(newIndex).toBe(4);
  });

  describe("initial", () => {
    it("emm should be /ɛ̃m/", () => {
      const word = "emmêler";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃m");
      expect(newIndex).toBe(3);
    });

    it("enn should be /ɛ̃n/", () => {
      // "ennemi" is an exception
      const word = "ennui";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃n");
      expect(newIndex).toBe(3);
    });
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("ein should be /ɛ̃/", () => {
      const word = "peinture";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(5);
    });

    it("em should be /ɛ̃/", () => {
      const word = "embue";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });

    it("en should be /ɛ̃/", () => {
      const word = "ensemble";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });
  });

  describe("before a vowel", () => {
    it("en should be /ɛ̃/", () => {
      const word = "peinture";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(5);
    });

    it("em should be /ɛ̃/", () => {
      const word = "embue";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });

    it("en should be /ɛ̃/", () => {
      const word = "ensemble";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });
  });

  it("final ein should be /ɛ̃/", () => {
    const word = "plein";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ̃");
    expect(newIndex).toBe(5);
  });

  describe("et final", () => {
    it("in the word 'et' should be /e/", () => {
      const word = "et";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("e");
      expect(newIndex).toBe(2);
    });

    it("otherwise should be /ɛ/", () => {
      const word = "filet";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(5);
    });
  });

  it("e before a single consonant and a vowel should be /ə/", () => {
    // Note that this covers non-nasal "en" and "em" e.g. as in "tenir"
    // and "demain"
    const word = "cheval";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ə");
    expect(newIndex).toBe(3);
  });

  it("e before two consonants should be /ɛ/", () => {
    // Note that this covers non-nasal "enn" and "emm" e.g. as in "tennis"
    // and "gemme". "Femme" is a notable exception.
    const word = "elle";
    const index = 0;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(1);
  });

  it("e before a silent final consonant should be /ə/", () => {
    const word = "pied";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("e");
    expect(newIndex).toBe(3);
  });

  it("e before a pronounced final consonant should be /ɛ/", () => {
    const word = "fer";
    const index = 1;

    const [newTransliteration, newIndex] = eTransliteration(word, index);

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(2);
  });

  describe("e final", () => {
    it("in monosyllables should be /ə/", () => {
      // These words are all 2 lettres long
      const word = "je";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ə");
      expect(newIndex).toBe(2);
    });

    it("otherwise should be /(ə)/", () => {
      const word = "parle";
      const index = 4;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("(ə)");
      expect(newIndex).toBe(5);
    });
  });

  describe("il graphemes", () => {
    it("final eil should be /ɛj/", () => {
      const word = "soleil";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɛj");
      expect(newIndex).toBe(6);
    });

    it("final euil should be /œj/", () => {
      const word = "deuil";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(5);
    });

    it("eill should be /ɛj/", () => {
      const word = "veille";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("ɛj");
      expect(newIndex).toBe(5);
    });

    it("euill should be /œj/", () => {
      const word = "feuille";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(6);
    });
  });

  describe("eu before a /z/ sound should be /ø/", () => {
    it("as when before medial z", () => {
      // z medial is realised as /z/
      const word = "geuze";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("øz");
      expect(newIndex).toBe(5);
    });

    it("as when before s followed by a vowel", () => {
      // s is realised as /z/ between vowels
      const word = "creuse";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration(word, index);

      expect(newTransliteration).toBe("øz");
      expect(newIndex).toBe(5);
    });
  });
});

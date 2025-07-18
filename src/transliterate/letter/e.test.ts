import eTransliteration from "./e.ts";

describe("eTransliteration", () => {
  it("é should be /e/", () => {
    const word = "été";
    const index = 0;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("e");
    expect(newIndex).toBe(1);
  });

  it("è should be /ɛ/", () => {
    const word = "père";
    const index = 1;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(2);
  });

  it("ë should be /ɛ/", () => {
    const word = "Noël";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(3);
  });

  describe("ê", () => {
    it("final should be /ɛ/", () => {
      const word = "épochê";
      const index = 5;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(6);
    });

    it("followed by a silent final consonant should be /ɛ/", () => {
      const word = "prêt";
      const index = 2;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(3);
    });

    it("otherwise (i.e. before a pronounced consonant) should be /ɛː/", () => {
      const word = "tête";
      const index = 1;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛː");
      expect(newIndex).toBe(2);
    });
  });

  describe("ein", () => {
    it("before a vowel should be /ɛn/", () => {
      const word = "peine";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛn");
      expect(newIndex).toBe(4);
    });

    it("otherwise should be /ɛ̃/", () => {
      const word = "peinture";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(4);
    });
  });

  describe("il graphemes", () => {
    it("final eil should be /ɛj/", () => {
      const word = "soleil";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛj");
      expect(newIndex).toBe(6);
    });

    it("final euil should be /œj/", () => {
      const word = "deuil";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(5);
    });

    it("eill should be /ɛj/", () => {
      const word = "veille";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛj");
      expect(newIndex).toBe(5);
    });

    it("euill should be /œj/", () => {
      const word = "feuille";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("œj");
      expect(newIndex).toBe(6);
    });
  });

  describe("ei variations", () => {
    it("eî should be /ɛː/", () => {
      const word = "reître";
      const index = 1;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛː");
      expect(newIndex).toBe(3);
    });

    it("ei final should be /ɛj/", () => {
      const word = "sensei";
      const index = 4;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛj");
      expect(newIndex).toBe(6);
    });

    it("ei otherwise should be /ɛː/", () => {
      // Note exception that borrowings from German are typically
      // pronounced /aj/
      const word = "seize";
      const index = 1;
      const [newTransliteration, newIndex] = eTransliteration({ word, index });
      expect(newTransliteration).toBe("ɛː");
      expect(newIndex).toBe(3);
    });
  });

  describe("eu", () => {
    it("final should be /ø/", () => {
      const word = "peu";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ø");
      expect(newIndex).toBe(3);
    });

    it("before e, s, t, x, or z should be /ø/", () => {
      const word = "meute";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ø");
      expect(newIndex).toBe(3);
    });

    it("otherwise should be /œ/", () => {
      const word = "fleur";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("œ");
      expect(newIndex).toBe(4);
    });
  });

  it("eau should be /o/", () => {
    const word = "beau";
    const index = 1;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("o");
    expect(newIndex).toBe(4);
  });

  describe("initial", () => {
    it("emm should be /ɑ̃m/", () => {
      const word = "emmêler";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃m");
      expect(newIndex).toBe(3);
    });

    it("enn should be /ɑ̃n/", () => {
      // "ennemi" is an exception
      const word = "ennui";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃n");
      expect(newIndex).toBe(3);
    });
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("em should be /ɑ̃/", () => {
      const word = "embue";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });

    it("en should be /ɑ̃/", () => {
      const word = "ensemble";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });
  });

  describe("en final", () => {
    it("should be /ɛ̃/", () => {
      const word = "bien";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(4);
    });

    it("followed by final s should be /ɛ̃/", () => {
      const word = "chiens";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(5);
    });
  });

  describe("ent final", () => {
    // it("in third person plural verbs should be /ə/", () => {
    //   // This requires checking the lexicon metadata to identify third
    //   // person plural verbs
    //   const word = "parlent";
    //   const index = 4;

    //   const [newTransliteration, newIndex] = eTransliteration({word, index});

    //   expect(newTransliteration).toBe("ə");
    //   expect(newIndex).toBe(7);
    // });

    it("otherwise should be /ɑ̃/", () => {
      const word = "cent";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(4);
    });

    it("otherwise with s should be /ɑ̃/", () => {
      const word = "patients";
      const index = 4;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(7);
    });
  });

  describe("et final", () => {
    it("in the word 'et' should be /e/", () => {
      const word = "et";
      const index = 0;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("e");
      expect(newIndex).toBe(2);
    });

    it("otherwise should be /ɛ/", () => {
      const word = "filet";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(5);
    });
  });

  describe("el final graphemes", () => {
    it("el final should be /ɛl/", () => {
      const word = "quel";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛl");
      expect(newIndex).toBe(4);
    });

    it("els final should be /ɛl/", () => {
      const word = "tels";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛl");
      expect(newIndex).toBe(4);
    });

    it("elle final should be /ɛl(ə)/", () => {
      const word = "telle";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛl(ə)");
      expect(newIndex).toBe(5);
    });

    it("elles final should be /ɛl(ə)/", () => {
      const word = "quelles";
      const index = 2;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛl(ə)");
      expect(newIndex).toBe(7);
    });
  });

  it("e before a single consonant and a vowel should be /ə/", () => {
    // Note that this covers non-nasal "en" and "em" e.g. as in "tenir"
    // and "demain"
    const word = "cheval";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("ə");
    expect(newIndex).toBe(3);
  });

  describe("e before two consonants", () => {
    it("the adverb suffix 'emment' should be /amɑ̃/", () => {
      const word = "récemment";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("amɑ̃");
      expect(newIndex).toBe(9);
    });

    it("otherwise should be /ɛ/", () => {
      // Note that this covers non-nasal "enn" and "emm" e.g. as in "tennis"
      // and "gemme". "Femme" is a notable exception.
      const word = "tennis";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(2);
    });
  });

  describe("er final", () => {
    it("for verbs (i.e. infinitive) should be /e/", () => {
      const word = "aller";
      const pos = "verbe";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({
        word,
        pos,
        index
      });

      expect(newTransliteration).toBe("e");
      expect(newIndex).toBe(5);
    });

    it("otherwise should be /ɛʁ/", () => {
      const word = "hiver";
      const index = 3;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ɛʁ");
      expect(newIndex).toBe(5);
    });
  });

  it("e before a silent final consonant should be /e/", () => {
    const word = "pied";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("e");
    expect(newIndex).toBe(3);
  });

  it("e before a pronounced final consonant should be /ɛ/", () => {
    const word = "bref";
    const index = 2;

    const [newTransliteration, newIndex] = eTransliteration({ word, index });

    expect(newTransliteration).toBe("ɛ");
    expect(newIndex).toBe(3);
  });

  describe("e final after a consonant", () => {
    it("in monosyllables should be /ə/", () => {
      // These words are all 2 lettres long
      const word = "je";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("ə");
      expect(newIndex).toBe(2);
    });

    it("in monosyllables with s should be /e(z)/", () => {
      // These words are all 3 lettres long. They may also be pronounced as
      // /ɛ/, but much less frequently.
      const word = "les";
      const index = 1;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("e(z)");
      expect(newIndex).toBe(3);
    });

    it("otherwise should be /(ə)/", () => {
      const word = "parle";
      const index = 4;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("(ə)");
      expect(newIndex).toBe(5);
    });

    it("otherwise with s should be /(ə)/", () => {
      const word = "hommes";
      const index = 4;

      const [newTransliteration, newIndex] = eTransliteration({ word, index });

      expect(newTransliteration).toBe("(ə)");
      expect(newIndex).toBe(6);
    });
  });
});

import uTransliteration from "./u-transliteration.ts";

describe("uTransliteration", () => {
  describe("before a vowel", () => {
    it("um should be /ym/", () => {
      const word = "fume";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ym");
      expect(newIndex).toBe(3);
    });

    it("un should be /yn/", () => {
      const word = "unanime";
      const index = 0;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("yn");
      expect(newIndex).toBe(2);
    });
  });

  describe("before a consonant excluding m, n, or h", () => {
    it("um should be /œ̃/", () => {
      // Other than plurals, the number of words with this sequence of letters
      // is very small. They largely seem to be borrowings directly from Latin
      // e.g. a handful of words from `circum-` e.g. `circumterrestre`, where
      // the `um` is pronounced `/ɔm/`.

      const word = "parfums";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(6);
    });

    it("un should be /œ̃/", () => {
      const word = "emprunte";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(6);
    });
  });

  describe("final", () => {
    it("um should be /ɔm/", () => {
      // Originally this rule was "final um should be /œ̃/", but there are
      // few words where this holds (e.g. "parfum"). Instead, there are many
      // direct borrowings from Latin e.g. 'album' and 'atrium', where the
      // `um` is pronounced `/ɔm/`.

      const word = "album";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɔm");
      expect(newIndex).toBe(5);
    });

    it("un should be /œ̃/ (a final /n/ is implied in liaison)", () => {
      const word = "aucun";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("œ̃");
      expect(newIndex).toBe(5);
    });
  });

  describe("/ɥ/ graphemes", () => {
    it("u followed by a should be /ɥ/, except when preceded by single l or r", () => {
      // The single letter requirement here appears to account for a few
      // additional words such as "polluant", "belluaire", "charruage"
      const word = "polluant";
      const index = 4;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥ");
      expect(newIndex).toBe(5);
    });

    it("u followed by o should be /ɥ/, except when preceded by l or r", () => {
      const word = "duo";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥ");
      expect(newIndex).toBe(2);
    });

    it("u followed by e with r, l, or t final should be /ɥ/", () => {
      // There are exceptions, but this covers the vast majority of cases
      // A notable exception is "cruel". Others are obscure words e.g.
      // "fluer" and "bluet"
      const word = "saluer";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥ");
      expect(newIndex).toBe(4);
    });

    it("u followed by elle final should be /ɥ/", () => {
      const word = "rituelle";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥ");
      expect(newIndex).toBe(4);
    });

    it("uill should be /ɥij/", () => {
      const word = "juillet";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥij");
      expect(newIndex).toBe(5);
    });

    it("ui final should be /ɥi/", () => {
      const word = "lui";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥi");
      expect(newIndex).toBe(3);
    });

    it("ui not followed by a back vowel should be /ɥi/", () => {
      const word = "pluie";
      const index = 2;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥi");
      expect(newIndex).toBe(4);
    });

    it("uy not followed by a back vowel should be /ɥi/", () => {
      const word = "ennuyer";
      const index = 3;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥi");
      expect(newIndex).toBe(5);
    });

    it("üi should be /ɥi/", () => {
      const word = "ambigüité";
      const index = 5;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("ɥi");
      expect(newIndex).toBe(7);
    });
  });

  describe("in all other cases", () => {
    it("u should be /y/", () => {
      const word = "abus";
      const index = 2;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
    });

    it("û should be /y/", () => {
      const word = "dû";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(2);
    });

    it("ü should be /y/", () => {
      const word = "führer";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(2);
    });

    it("ue should be /y/", () => {
      const word = "due";
      const index = 1;

      const [newTransliteration, newIndex] = uTransliteration(word, index);

      expect(newTransliteration).toBe("y");
      expect(newIndex).toBe(3);
    });
  });
});

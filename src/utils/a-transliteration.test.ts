import aTransliteration from "./a-transliteration.ts";

describe("aTransliteration", () => {
  describe("ai variations", () => {
    it("final ai should be /e/", () => {
      const word = "ai";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("e");
      expect(newIndex).toBe(2);
    });

    it("final ais should be /ɛ/", () => {
      const word = "mais";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(3);
    });

    it("final ait should be /ɛ/", () => {
      // The obvious exception here is the noun form of "fait", where
      // the final "t" is pronounced. However, there's no good way to
      // distinguish that from the verb form anyway.

      const word = "avait";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(5);
    });

    it("final aient should be /ɛ/", () => {
      const word = "avaient";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(7);
    });

    it("aie should be /ɛ/", () => {
      const word = "baie";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(4);
    });

    it("aill should be /aj/", () => {
      const word = "cailloux";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("aj");
      expect(newIndex).toBe(5);
    });

    it("final ail should be /aj/", () => {
      const word = "travail";
      const index = 4;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("aj");
      expect(newIndex).toBe(7);
    });

    it("aî should be /ɛ/", () => {
      const word = "naît";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(3);
    });

    it("ai should be /ɛ/", () => {
      const word = "aide";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ");
      expect(newIndex).toBe(2);
    });
  });

  it("â should be /ɑ/", () => {
    const word = "pâte";
    const index = 1;

    const [newTransliteration, newIndex] = aTransliteration(word, index);

    expect(newTransliteration).toBe("ɑ");
    expect(newIndex).toBe(2);
  });

  describe("a before", () => {
    it("a /s/ sound should be /ɑ/", () => {
      const word = "lacer";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ");
      expect(newIndex).toBe(2);
    });

    it("a /z/ sound should be /ɑ/", () => {
      const word = "extase";
      const index = 3;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ");
      expect(newIndex).toBe(4);
    });
  });

  describe("when final", () => {
    it("an should be /ɑ̃/", () => {
      const word = "an";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(2);
    });

    it("aon should be /ɑ̃/", () => {
      const word = "faon";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(4);
    });

    it("aim should be /ɛ̃/", () => {
      const word = "faim";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(4);
    });

    it("ain should be /ɛ̃/", () => {
      const word = "bain";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(4);
    });
  });

  describe("before a consonant except m, m, or h", () => {
    it("am should be /ɑ̃/", () => {
      const word = "champ";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(4);
    });

    it("an should be /ɑ̃/", () => {
      const word = "fumant";
      const index = 3;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɑ̃");
      expect(newIndex).toBe(5);
    });

    it("aim should be /ɛ̃/", () => {
      const word = "faim";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(4);
    });

    it("ain should be /ɛ̃/", () => {
      const word = "ainsi";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛ̃");
      expect(newIndex).toBe(3);
    });
  });

  describe("before a vowel", () => {
    it("am should be /am/", () => {
      const word = "amie";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("am");
      expect(newIndex).toBe(2);
    });

    it("an should be /an/", () => {
      const word = "unanime";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("an");
      expect(newIndex).toBe(4);
    });

    it("aim should be /ɛm/", () => {
      const word = "aime";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛm");
      expect(newIndex).toBe(3);
    });

    it("ain should be /ɛn/", () => {
      const word = "plaine";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɛn");
      expect(newIndex).toBe(5);
    });
  });

  it("amm should be /am/", () => {
    const word = "gramme";
    const index = 2;

    const [newTransliteration, newIndex] = aTransliteration(word, index);

    expect(newTransliteration).toBe("am");
    expect(newIndex).toBe(5);
  });

  it("ann should be /an/", () => {
    const word = "anneau";
    const index = 0;

    const [newTransliteration, newIndex] = aTransliteration(word, index);

    expect(newTransliteration).toBe("an");
    expect(newIndex).toBe(3);
  });

  describe("au", () => {
    it("before r should be /ɔ/", () => {
      const word = "aurai";
      const index = 0;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("ɔ");
      expect(newIndex).toBe(2);
    });

    it("otherwise should be /o/", () => {
      const word = "chaud";
      const index = 2;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("o");
      expect(newIndex).toBe(4);
    });
  });

  it("ay should be /ɛj/", () => {
    const word = "paye";
    const index = 1;

    const [newTransliteration, newIndex] = aTransliteration(word, index);

    expect(newTransliteration).toBe("ɛj");
    expect(newIndex).toBe(3);
  });

  describe("otherwise", () => {
    it("a should be /a/", () => {
      const word = "Paris";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("a");
      expect(newIndex).toBe(2);
    });

    it("à should be /a/", () => {
      const word = "là";
      const index = 1;

      const [newTransliteration, newIndex] = aTransliteration(word, index);

      expect(newTransliteration).toBe("a");
      expect(newIndex).toBe(2);
    });
  });
});

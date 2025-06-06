import { vowelPhoneme } from "./letter-group-definitions.ts";
import transliterateWord from "./transliterate-word.ts";

export default function transliterateLexicalUnit(lexicalUnit: string) {
  const lowerCaseLexicalUnit = lexicalUnit.toLowerCase();

  if (/.+-.+/i.test(lowerCaseLexicalUnit)) {
    // if a hyphenated compound word
    const words = lowerCaseLexicalUnit.split("-");

    const transliteratedWords = words.map((word) => transliterateWord(word));

    const hasOptionalFinalPhoneme = /\(.\)$/i;
    const startsWithVowel = new RegExp(String.raw`^[${vowelPhoneme}]`, "i");

    for (let i = 0; i < transliteratedWords.length - 1; i++) {
      // for all but the final word in the lexical unit

      if (!hasOptionalFinalPhoneme.test(transliteratedWords[i])) continue;

      if (!startsWithVowel.test(transliteratedWords[i + 1])) continue;

      transliteratedWords[i] = transliteratedWords[i].replace(/[()]/g, "");
    }

    return transliteratedWords.join("-");
  } else {
    return transliterateWord(lowerCaseLexicalUnit);
  }
}

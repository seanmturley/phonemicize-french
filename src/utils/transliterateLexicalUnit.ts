import { consonantPhoneme, vowelPhoneme } from "./letter-group-definitions.ts";
import transliterateWord from "./transliterate-word.ts";

export default function transliterateLexicalUnit(lexicalUnit: string) {
  const lowerCaseLexicalUnit = lexicalUnit.toLowerCase();

  if (/.+-.+/i.test(lowerCaseLexicalUnit)) {
    // if a hyphenated compound word
    const words = lowerCaseLexicalUnit.split("-");

    const transliteratedWords = words.map((word) => transliterateWord(word));

    const optionalFinalPhoneme = /\(.\)$/i;
    const optionalFinalE = /\(ə\)$/i;
    const startsWithVowel = new RegExp(String.raw`^[${vowelPhoneme}]`, "i");
    const startsWithConsonant = new RegExp(
      String.raw`^[${consonantPhoneme}]`,
      "i"
    );

    for (let i = 0; i < transliteratedWords.length - 1; i++) {
      // for all but the final word in the lexical unit

      if (!optionalFinalPhoneme.test(transliteratedWords[i])) continue;

      if (optionalFinalE.test(transliteratedWords[i])) {
        if (startsWithConsonant.test(transliteratedWords[i + 1])) {
          transliteratedWords[i] = transliteratedWords[i].replace(/[()]/g, "");
        } else {
          continue;
        }
      }

      if (startsWithVowel.test(transliteratedWords[i + 1])) {
        transliteratedWords[i] = transliteratedWords[i].replace(/[()]/g, "");
      } else {
        transliteratedWords[i] = transliteratedWords[i].replace(
          optionalFinalPhoneme,
          ""
        );
      }
    }

    return transliteratedWords.join("-");
  } else {
    return transliterateWord(lowerCaseLexicalUnit);
  }
}

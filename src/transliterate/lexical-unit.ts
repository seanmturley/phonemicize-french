import {
  consonantPhoneme,
  vowelOrSemivowelPhoneme
} from "./letter-group-definitions.ts";
import transliterateWord from "./word.ts";

const optionalFinalE = /\(ə\)$/i;
const startsWithConsonant = new RegExp(String.raw`^[${consonantPhoneme}]`, "i");
const optionalFinalConsonant = new RegExp(
  String.raw`\([${consonantPhoneme}]\)$`,
  "i"
);
const startsWithVowelOrSemivowel = new RegExp(
  String.raw`^[${vowelOrSemivowelPhoneme}]`,
  "i"
);

const removeParenthesis = (word: string) => word.replace(/[()]/g, "");

export default function transliterateLexicalUnit(lexicalUnit: string) {
  const lowerCaseLexicalUnit = lexicalUnit.toLowerCase();

  if (/.+-.+/i.test(lowerCaseLexicalUnit)) {
    // if a hyphenated compound word
    const words = lowerCaseLexicalUnit.split("-");

    const transliteratedWords = words.map((word) => transliterateWord(word));

    for (let i = 0; i < transliteratedWords.length - 1; i++) {
      // for all but the final word in the lexical unit

      if (
        optionalFinalE.test(transliteratedWords[i]) &&
        startsWithConsonant.test(transliteratedWords[i + 1])
      ) {
        transliteratedWords[i] = removeParenthesis(transliteratedWords[i]);
      } else if (optionalFinalConsonant.test(transliteratedWords[i])) {
        if (startsWithVowelOrSemivowel.test(transliteratedWords[i + 1])) {
          transliteratedWords[i] = removeParenthesis(transliteratedWords[i]);
        } else {
          transliteratedWords[i] = transliteratedWords[i].replace(
            optionalFinalConsonant,
            ""
          );
        }
      }
    }

    return transliteratedWords.join("-");
  } else {
    return transliterateWord(lowerCaseLexicalUnit);
  }
}

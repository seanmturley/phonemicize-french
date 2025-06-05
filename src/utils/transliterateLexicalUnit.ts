import transliterateWord from "./transliterate-word.ts";

export default function transliterateLexicalUnit(lexicalUnit: string) {
  const lowerCaseLexicalUnit = lexicalUnit.toLowerCase();

  if (/.+-.+/i.test(lowerCaseLexicalUnit)) {
    // if a hyphenated compound word
    const words = lowerCaseLexicalUnit.split("-");

    const transliteratedWords = words.map((word) => transliterateWord(word));

    // modify as necessary for liaison pronunciation

    return transliteratedWords.join("-");
  } else {
    return transliterateWord(lowerCaseLexicalUnit);
  }
}

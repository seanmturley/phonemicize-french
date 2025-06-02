import transliterateWord from "./transliterate-word.ts";

export default function transliterateLexicalUnit(lexicalUnit: string) {
  if (/.+-.+/i.test(lexicalUnit)) {
    // if a hyphenated compound word
    // do something more complicated
  } else {
    transliterateWord(lexicalUnit);
  }
}

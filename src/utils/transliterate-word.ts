import bTransliteration from "./b-transliteration.ts";

export default function transliterateWord(word: string) {
  let latin = word;
  let transliteration = "";

  while (latin.length) {
    let newTransliteration = "";
    const firstLetter = latin.substring(0, 1);

    switch (firstLetter) {
      case "b":
        [latin, newTransliteration] = bTransliteration(latin);
        break;

      default:
        newTransliteration += latin.substring(0, 1);
        latin = latin.substring(1);
    }

    transliteration += newTransliteration;
  }

  return transliteration;
}

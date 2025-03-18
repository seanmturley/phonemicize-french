import bTransliteration from "./b-transliteration.ts";
import dTransliteration from "./d-transliteration.ts";
import fTransliteration from "./f-transliteration.ts";
import gTransliteration from "./g-transliteration.ts";
import jTransliteration from "./j-transliteration.ts";
import kTransliteration from "./k-transliteration.ts";
import lTransliteration from "./l-transliteration.ts";

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

      case "d":
        [latin, newTransliteration] = dTransliteration(latin);
        break;

      case "f":
        [latin, newTransliteration] = fTransliteration(latin);
        break;

      case "g":
        [latin, newTransliteration] = gTransliteration(latin);
        break;

      case "j":
        [latin, newTransliteration] = jTransliteration(latin);
        break;

      case "k":
        [latin, newTransliteration] = kTransliteration(latin);
        break;

      case "l":
        [latin, newTransliteration] = lTransliteration(latin);
        break;

      default:
        newTransliteration += latin.substring(0, 1);
        latin = latin.substring(1);
    }

    transliteration += newTransliteration;
  }

  return transliteration;
}

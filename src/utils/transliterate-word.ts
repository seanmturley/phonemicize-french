import bTransliteration from "./b-transliteration.ts";
import cTransliteration from "./c-transliteration.ts";
import dTransliteration from "./d-transliteration.ts";
import fTransliteration from "./f-transliteration.ts";
import gTransliteration from "./g-transliteration.ts";
import hTransliteration from "./h-transliteration.ts";
import jTransliteration from "./j-transliteration.ts";
import kTransliteration from "./k-transliteration.ts";
import lTransliteration from "./l-transliteration.ts";
import mTransliteration from "./m-transliteration.ts";
import nTransliteration from "./n-transliteration.ts";
import pTransliteration from "./p-transliteration.ts";
import qTransliteration from "./q-transliteration.ts";
import rTransliteration from "./r-transliteration.ts";
import sTransliteration from "./s-transliteration.ts";
import tTransliteration from "./t-transliteration.ts";
import vTransliteration from "./v-transliteration.ts";
import wTransliteration from "./w-transliteration.ts";
import xTransliteration from "./x-transliteration.ts";

export default function transliterateWord(word: string) {
  let transliteration = "";
  let index = 0;

  while (index < word.length) {
    let newTransliteration = "";
    const firstLetter = word.substring(index, index + 1);

    switch (firstLetter) {
      case "b":
        [newTransliteration, index] = bTransliteration(word, index);
        break;

      // case "c":
      //   [word, precedingLatin, newTransliteration] = cTransliteration(
      //     word,
      //     precedingLatin
      //   );
      //   break;

      // case "d":
      //   [word, newTransliteration] = dTransliteration(word);
      //   break;

      // case "f":
      //   [word, newTransliteration] = fTransliteration(word);
      //   break;

      // case "g":
      //   [word, newTransliteration] = gTransliteration(word);
      //   break;

      // case "h":
      //   [word, newTransliteration] = hTransliteration(word);
      //   break;

      // case "j":
      //   [word, newTransliteration] = jTransliteration(word);
      //   break;

      // case "k":
      //   [word, newTransliteration] = kTransliteration(word);
      //   break;

      // case "l":
      //   [word, newTransliteration] = lTransliteration(word);
      //   break;

      // case "m":
      //   [word, newTransliteration] = mTransliteration(word);
      //   break;

      // case "n":
      //   [word, newTransliteration] = nTransliteration(word);
      //   break;

      // case "p":
      //   [word, newTransliteration] = pTransliteration(word);
      //   break;

      // case "q":
      //   [word, newTransliteration] = qTransliteration(word);
      //   break;

      // case "r":
      //   [word, newTransliteration] = rTransliteration(word);
      //   break;

      // case "s":
      //   [word, newTransliteration] = sTransliteration(word);
      //   break;

      // case "t":
      //   [word, newTransliteration] = tTransliteration(word);
      //   break;

      // case "v":
      //   [word, newTransliteration] = vTransliteration(word);
      //   break;

      // case "w":
      //   [word, newTransliteration] = wTransliteration(word);
      //   break;

      // case "x":
      //   [word, newTransliteration] = xTransliteration(word);
      //   break;

      default:
        newTransliteration += word.substring(0, 1);
        index += 1;
    }

    transliteration += newTransliteration;
  }

  return transliteration;
}

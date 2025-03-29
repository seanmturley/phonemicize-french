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
import uTransliteration from "./u-transliteration.ts";
import vTransliteration from "./v-transliteration.ts";
import wTransliteration from "./w-transliteration.ts";
import xTransliteration from "./x-transliteration.ts";
import yTransliteration from "./y-transliteration.ts";
import zTransliteration from "./z-transliteration.ts";

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

      case "c":
        [newTransliteration, index] = cTransliteration(word, index);
        break;

      case "d":
        [newTransliteration, index] = dTransliteration(word, index);
        break;

      case "f":
        [newTransliteration, index] = fTransliteration(word, index);
        break;

      case "g":
        [newTransliteration, index] = gTransliteration(word, index);
        break;

      case "h":
        [newTransliteration, index] = hTransliteration(word, index);
        break;

      case "j":
        [newTransliteration, index] = jTransliteration(word, index);
        break;

      case "k":
        [newTransliteration, index] = kTransliteration(word, index);
        break;

      case "l":
        [newTransliteration, index] = lTransliteration(word, index);
        break;

      case "m":
        [newTransliteration, index] = mTransliteration(word, index);
        break;

      case "n":
        [newTransliteration, index] = nTransliteration(word, index);
        break;

      case "p":
        [newTransliteration, index] = pTransliteration(word, index);
        break;

      case "q":
        [newTransliteration, index] = qTransliteration(word, index);
        break;

      case "r":
        [newTransliteration, index] = rTransliteration(word, index);
        break;

      case "s":
        [newTransliteration, index] = sTransliteration(word, index);
        break;

      case "t":
        [newTransliteration, index] = tTransliteration(word, index);
        break;

      case "u":
        [newTransliteration, index] = uTransliteration(word, index);
        break;

      case "v":
        [newTransliteration, index] = vTransliteration(word, index);
        break;

      case "w":
        [newTransliteration, index] = wTransliteration(word, index);
        break;

      case "x":
        [newTransliteration, index] = xTransliteration(word, index);
        break;

      case "y":
        [newTransliteration, index] = yTransliteration(word, index);
        break;

      case "z":
        [newTransliteration, index] = zTransliteration(word, index);
        break;

      default:
        newTransliteration += word.substring(index, index + 1);
        index += 1;
    }

    transliteration += newTransliteration;
  }

  return transliteration;
}

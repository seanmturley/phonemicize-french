import aTransliteration from "./transliterate/a.ts";
import bTransliteration from "./transliterate/b.ts";
import cTransliteration from "./transliterate/c.ts";
import dTransliteration from "./transliterate/d.ts";
import eTransliteration from "./transliterate/e.ts";
import fTransliteration from "./transliterate/f.ts";
import gTransliteration from "./transliterate/g.ts";
import hTransliteration from "./transliterate/h.ts";
import iTransliteration from "./transliterate/i.ts";
import jTransliteration from "./transliterate/j.ts";
import kTransliteration from "./transliterate/k.ts";
import lTransliteration from "./transliterate/l.ts";
import mTransliteration from "./transliterate/m.ts";
import nTransliteration from "./transliterate/n.ts";
import oTransliteration from "./transliterate/o.ts";
import pTransliteration from "./transliterate/p.ts";
import qTransliteration from "./transliterate/q.ts";
import rTransliteration from "./transliterate/r.ts";
import sTransliteration from "./transliterate/s.ts";
import tTransliteration from "./transliterate/t.ts";
import uTransliteration from "./transliterate/u.ts";
import vTransliteration from "./transliterate/v.ts";
import wTransliteration from "./transliterate/w.ts";
import xTransliteration from "./transliterate/x.ts";
import yTransliteration from "./transliterate/y.ts";
import zTransliteration from "./transliterate/z.ts";

export default function transliterateWord(word: string) {
  let transliteration = "";
  let index = 0;

  while (index < word.length) {
    let newTransliteration = "";
    const currentLetter = word.substring(index, index + 1);

    switch (currentLetter) {
      case currentLetter.match(/\p{P}/u)?.input:
        [newTransliteration, index] = [currentLetter, index + 1];
        break;
      case "a":
      case "à":
      case "â":
      case "æ":
        [newTransliteration, index] = aTransliteration(word, index);
        break;

      case "b":
        [newTransliteration, index] = bTransliteration(word, index);
        break;

      case "c":
      case "ç":
        [newTransliteration, index] = cTransliteration(word, index);
        break;

      case "d":
        [newTransliteration, index] = dTransliteration(word, index);
        break;

      case "e":
      case "é":
      case "è":
      case "ê":
      case "ë":
        [newTransliteration, index] = eTransliteration(word, index);
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

      case "i":
      case "î":
      case "ï":
        [newTransliteration, index] = iTransliteration(word, index);
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

      case "o":
      case "ô":
      case "œ":
        [newTransliteration, index] = oTransliteration(word, index);
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
      case "ù":
      case "û":
      case "ü":
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
      case "ÿ":
        [newTransliteration, index] = yTransliteration(word, index);
        break;

      case "z":
        [newTransliteration, index] = zTransliteration(word, index);
        break;

      default:
        throw new Error(`Character "${currentLetter}" is not handled.`);
    }

    transliteration += newTransliteration;
  }

  return transliteration;
}

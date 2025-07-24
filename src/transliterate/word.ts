import aTransliteration from "./letter/a.ts";
import bTransliteration from "./letter/b.ts";
import cTransliteration from "./letter/c.ts";
import dTransliteration from "./letter/d.ts";
import eTransliteration from "./letter/e.ts";
import fTransliteration from "./letter/f.ts";
import gTransliteration from "./letter/g.ts";
import hTransliteration from "./letter/h.ts";
import iTransliteration from "./letter/i.ts";
import jTransliteration from "./letter/j.ts";
import kTransliteration from "./letter/k.ts";
import lTransliteration from "./letter/l.ts";
import mTransliteration from "./letter/m.ts";
import nTransliteration from "./letter/n.ts";
import oTransliteration from "./letter/o.ts";
import pTransliteration from "./letter/p.ts";
import qTransliteration from "./letter/q.ts";
import rTransliteration from "./letter/r.ts";
import sTransliteration from "./letter/s.ts";
import tTransliteration from "./letter/t.ts";
import uTransliteration from "./letter/u.ts";
import vTransliteration from "./letter/v.ts";
import wTransliteration from "./letter/w.ts";
import xTransliteration from "./letter/x.ts";
import yTransliteration from "./letter/y.ts";
import zTransliteration from "./letter/z.ts";

export default function transliterateWord(word: string, pos: string) {
  let transliteration = "";
  let index = 0;

  while (index < word.length) {
    let newTransliteration = "";
    const currentLetter = word.substring(index, index + 1);

    switch (currentLetter) {
      case currentLetter.match(/\p{P}/u)?.input:
      case currentLetter.match(/\d/)?.input:
        [newTransliteration, index] = [currentLetter, index + 1];
        break;

      case "a":
      case "à":
      case "â":
      case "æ":
        [newTransliteration, index] = aTransliteration({ word, index });
        break;

      case "b":
        [newTransliteration, index] = bTransliteration({ word, index });
        break;

      case "c":
      case "ç":
        [newTransliteration, index] = cTransliteration({ word, index });
        break;

      case "d":
        [newTransliteration, index] = dTransliteration({ word, index });
        break;

      case "e":
      case "é":
      case "è":
      case "ê":
      case "ë":
        [newTransliteration, index] = eTransliteration({ word, pos, index });
        break;

      case "f":
        [newTransliteration, index] = fTransliteration({ word, index });
        break;

      case "g":
        [newTransliteration, index] = gTransliteration({ word, index });
        break;

      case "h":
        [newTransliteration, index] = hTransliteration({ word, index });
        break;

      case "i":
      case "î":
      case "ï":
        [newTransliteration, index] = iTransliteration({ word, index });
        break;

      case "j":
        [newTransliteration, index] = jTransliteration({ word, index });
        break;

      case "k":
        [newTransliteration, index] = kTransliteration({ word, index });
        break;

      case "l":
        [newTransliteration, index] = lTransliteration({ word, index });
        break;

      case "m":
        [newTransliteration, index] = mTransliteration({ word, index });
        break;

      case "n":
        [newTransliteration, index] = nTransliteration({ word, index });
        break;

      case "o":
      case "ô":
      case "œ":
        [newTransliteration, index] = oTransliteration({ word, index });
        break;

      case "p":
        [newTransliteration, index] = pTransliteration({ word, index });
        break;

      case "q":
        [newTransliteration, index] = qTransliteration({ word, index });
        break;

      case "r":
        [newTransliteration, index] = rTransliteration({ word, index });
        break;

      case "s":
        [newTransliteration, index] = sTransliteration({ word, index });
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

export default function tTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/t$/i.test(latin)) {
    // final t should be [t] in liaison, but otherwise silent
    newTransliteration = "(t)";
  } else if (/^th/i.test(latin)) {
    // initial or medial tt should be [t]
    newTransliteration = "t";
    numTransliteratedCharacters = 2;
  } else if (/tion$/i.test(latin)) {
    // the ending tion should be [sjɔ̃]
    newTransliteration = "sjɔ̃";
    numTransliteratedCharacters = 4;
  } else if (/tience$/i.test(latin)) {
    // the ending tience should be [sjɑ̃s]
    newTransliteration = "sjɑ̃s";
    numTransliteratedCharacters = 6;
  } else if (/^tt/i.test(latin)) {
    // initial or medial tt should be [t]
    newTransliteration = "t";
    numTransliteratedCharacters = 2;
  } else {
    // initial or medial t should be [t]
    newTransliteration = "t";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

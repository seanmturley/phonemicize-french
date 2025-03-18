export default function fTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ff/i.test(latin)) {
    // initial or medial ff should be [f]
    newTransliteration = "f";
    numTransliteratedCharacters = 2;
  } else {
    // initial, medial, or final f should be [f]
    // Note exceptions for final f - see test for details
    newTransliteration = "f";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

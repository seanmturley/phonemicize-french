export default function bTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/b$/i.test(latin)) {
    // final b should be silent
    newTransliteration = "";
  } else if (/^bb/i.test(latin)) {
    // initial or medial bb should be [b]
    newTransliteration = "b";
    numTransliteratedCharacters = 2;
  } else if (/^b[st]/i.test(latin)) {
    // b followed by -s or -t should be [p]
    newTransliteration = "p";
  } else {
    // initial or medial b should be [b]
    newTransliteration = "b";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);
  const newPrecedingLatin = latin.substring(0, numTransliteratedCharacters);

  return [newLatin, newPrecedingLatin, newTransliteration];
}

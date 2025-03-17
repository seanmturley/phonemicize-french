export default function bTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/b$/i.test(latin)) {
    // final b should be silent
    newTransliteration = "";
  } else if (/^bb/i.test(latin)) {
    // initial or medial bb should return [b]
    newTransliteration = "b";
    numTransliteratedCharacters = 2;
  } else if (/^b[st]/i.test(latin)) {
    // b followed by -s or -t should return [p]
    newTransliteration = "p";
  } else {
    // initial or medial b should return [b]
    newTransliteration = "b";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

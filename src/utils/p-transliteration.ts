export default function pTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/p$/i.test(latin)) {
    // final p should be silent
    newTransliteration = "";
  } else if (/^ph/i.test(latin)) {
    // ph should be [f]
    newTransliteration = "f";
    numTransliteratedCharacters = 2;
  } else if (/^pp/i.test(latin)) {
    // pp should be [p]
    newTransliteration = "p";
    numTransliteratedCharacters = 2;
  } else {
    // p should be [p]
    newTransliteration = "p";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

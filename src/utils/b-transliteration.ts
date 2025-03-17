export default function bTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^bb/i.test(latin)) {
    newTransliteration = "b";
    numTransliteratedCharacters = 2;
  } else if (/b$/i.test(latin)) {
    newTransliteration = "";
  } else if (/^b[st]/i.test(latin)) {
    newTransliteration = "p";
  } else {
    newTransliteration = "b";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

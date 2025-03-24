export default function rTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^rr/i.test(latin)) {
    // medial rr should should be [ʁ]
    newTransliteration = "ʁ";
    numTransliteratedCharacters = 2;
  } else if (/^r/i.test(latin)) {
    // initial or medial r should be [ʁ]
    newTransliteration = "ʁ";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

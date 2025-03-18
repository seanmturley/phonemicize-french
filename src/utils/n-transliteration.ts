export default function nTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^nn/i.test(latin)) {
    // nn should be [n]
    newTransliteration = "n";
    numTransliteratedCharacters = 2;
  } else {
    // n should be [n]
    newTransliteration = "n";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

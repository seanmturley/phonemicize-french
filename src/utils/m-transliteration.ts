export default function mTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^mm/i.test(latin)) {
    // mm should be [m]
    newTransliteration = "m";
    numTransliteratedCharacters = 2;
  } else {
    // m should be [m]
    newTransliteration = "m";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

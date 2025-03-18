export default function lTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/^ll/i.test(latin)) {
    // ll should be [l]
    newTransliteration = "l";
    numTransliteratedCharacters = 2;
  } else {
    // l should be [l]
    newTransliteration = "l";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

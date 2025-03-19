export default function qTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/q$/i.test(latin)) {
    // final q should be [k]
    newTransliteration = "k";
  } else if (/^qu/i.test(latin)) {
    // qu should be [k]
    newTransliteration = "k";
    numTransliteratedCharacters = 2;
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

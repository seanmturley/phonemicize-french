export default function dTransliteration(latin: string) {
  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/d$/i.test(latin)) {
    // final d should be [t] in liaison, but otherwise silent
    newTransliteration = "(t)";
  } else if (/^dd/i.test(latin)) {
    // initial or medial dd should be [d]
    newTransliteration = "d";
    numTransliteratedCharacters = 2;
  } else {
    // initial or medial d should be [d]
    newTransliteration = "d";
  }

  const newLatin = latin.substring(numTransliteratedCharacters);

  return [newLatin, newTransliteration];
}

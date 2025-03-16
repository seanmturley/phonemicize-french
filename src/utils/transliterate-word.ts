export default function transliterateWord(word: string) {
  let original = word;
  let transliteration = "";

  while (original.length) {
    transliteration += original.substring(0, 1);
    original = original.substring(1);
  }

  return transliteration;
}

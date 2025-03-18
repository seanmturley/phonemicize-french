export default function jTransliteration(latin: string) {
  const newLatin = latin.substring(1);

  return [newLatin, "ʒ"];
}

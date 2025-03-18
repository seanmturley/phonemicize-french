export default function kTransliteration(latin: string) {
  const newLatin = latin.substring(1);

  return [newLatin, "k"];
}

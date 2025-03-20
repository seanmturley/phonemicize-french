export default function vTransliteration(latin: string) {
  const newLatin = latin.substring(1);

  return [newLatin, "v"];
}

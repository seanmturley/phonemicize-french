export default function wTransliteration(latin: string) {
  const newLatin = latin.substring(1);

  // Note "clown" as an exception, rendered as [klun]
  return [newLatin, "w"];
}

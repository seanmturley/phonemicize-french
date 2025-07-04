import posTagCombinationDefinitions from "../lib/pos-tag-combination-definitions.ts";

export default function formatPosTags(posTags: string, lemma: string) {
  // eslint-disable-next-line prefer-const
  let [primaryTag, ...secondaryTagsArray] =
    posTagCombinationDefinitions[posTags].split(" ");

  if (lemma === "avoir" || lemma === "être") {
    primaryTag += " " + secondaryTagsArray.shift();
  }

  const secondaryTags = secondaryTagsArray.join(" ");

  return [primaryTag, secondaryTags];
}

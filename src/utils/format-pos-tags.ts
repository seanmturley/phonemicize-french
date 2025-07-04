import posTagCombinationDefinitions from "../lib/pos-tag-combination-definitions.ts";

export default function formatPosTags(posTags: string) {
  const fullTags = posTagCombinationDefinitions[posTags];

  let [primaryTag, ...secondaryTagsArray] = fullTags.split(" ");

  if (secondaryTagsArray[0] === "avoir" || secondaryTagsArray[0] === "être") {
    primaryTag = [primaryTag, secondaryTagsArray[0]].join(" ");

    secondaryTagsArray = secondaryTagsArray.slice(1);
  }

  const secondaryTags = secondaryTagsArray.join(" ");

  return [primaryTag, secondaryTags];
}

import posTagCombinationDefinitions from "../lib/pos-tag-combination-definitions.ts";

export default function formatPosTags(posTags: string) {
  const fullPosTags = posTagCombinationDefinitions[posTags];
  const spaceIndex = fullPosTags.indexOf(" ");

  if (spaceIndex === -1) {
    // No space found, there's only 1 tag
    return {
      primaryPosTag: fullPosTags,
      secondaryPosTags: null
    };
  }

  return {
    primaryPosTag: fullPosTags.slice(0, spaceIndex),
    secondaryPosTags: fullPosTags.slice(spaceIndex + 1)
  };
}

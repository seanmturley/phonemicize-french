import posTagCombinations from "../lib/pos_tag_combinations.ts";

const uniqueTags: Record<string, string> = {};

posTagCombinations.forEach((tagCombination) => {
  const individualTags = tagCombination.split(" ");

  individualTags.forEach((tag) => {
    if (!Object.hasOwn(uniqueTags, tag)) {
      uniqueTags[tag] = "";
    }
  });
});

console.log(uniqueTags);

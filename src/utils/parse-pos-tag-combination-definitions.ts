import posTagCombinations from "../lib/pos-tag-combinations.ts";
import posTagIndividualDefinitions from "../lib/pos-tag-individual-definitions.ts";

const posTagCombinationDefinitions: Record<string, string> = {};

posTagCombinations.forEach((tagCombination) => {
  const combinationDefinition: string[] = [];
  const individualTags = tagCombination.split(" ");

  individualTags.forEach((tag) => {
    const tagDefinition = posTagIndividualDefinitions[tag];

    combinationDefinition.push(tagDefinition);
  });

  const combinationDefinitionString = combinationDefinition.join(" ");

  posTagCombinationDefinitions[tagCombination] = combinationDefinitionString;
});

console.log(posTagCombinationDefinitions);

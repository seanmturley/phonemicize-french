import posTagCombinations from "../lib/pos_tag_combinations.ts";
import posTagIndividualDefinitions from "../lib/pos_tag_individual_definitions.ts";

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

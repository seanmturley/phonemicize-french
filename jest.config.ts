import { createDefaultEsmPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultEsmPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  verbose: true,
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        useESM: true
      }
    ]
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};

export default jestConfig;

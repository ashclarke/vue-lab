// eslint-disable-next-line @typescript-eslint/no-var-requires -- Disabled as this is not a TS context
const defaultPreset = require("@vue/cli-plugin-unit-jest/presets/typescript-and-babel/jest-preset");

const config = {
  ...defaultPreset,
  testMatch: ["**/src/**/*.spec.ts"],
  transform: {
    ...defaultPreset.transform,
    "^.+\\.vue$": "vue-jest",
  },
};

module.exports = config;

/* config-overrides.js */
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  jest: {
    configure: (jestConfig) => {
      jestConfig.transform = {
        "\\.css(.js)?$": "@vanilla-extract/jest-transform",
        "\\.[jt]sx?$": "babel-jest",
        ...jestConfig.transform,
      };
      return jestConfig;
    },
  },
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
};

/*global module*/
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  "react/jsx-filename-extension": [
    1,
    {
      extensions: [".js", ".jsx"],
    },
  ],
};

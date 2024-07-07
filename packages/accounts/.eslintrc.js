/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["lib/generated/*"],
  rules: {
    "turbo/no-undeclared-env-vars": ["error", { allowList: ["NODE_ENV"] }]
  }
};

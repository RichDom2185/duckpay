/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"]
    }
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};

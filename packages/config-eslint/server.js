import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...compat.env({
    node: true,
    es6: true
  }),
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);

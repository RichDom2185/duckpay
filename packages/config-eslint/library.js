import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { resolve } from "node:path";
import tseslint from "typescript-eslint";

const project = resolve(process.cwd(), "tsconfig.json");

const compat = new FlatCompat();

export default tseslint.config(
  {
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      "dist/"
    ]
  },
  js.configs.recommended,
  ...compat.extends("prettier"),
  ...compat.extends("turbo"),
  ...compat.plugins("only-warn"),
  ...compat.env({
    node: true,
    es2020: true
  }),
  {
    settings: {
      "import/resolver": {
        typescript: {
          project
        }
      }
    }
  }
);

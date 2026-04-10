import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default tseslint.config(
  { ignores: ["dist", "eslint.config.js"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  ...compat.env({ browser: true, es2020: true }),
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.plugins("react-refresh"),
  {
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
);

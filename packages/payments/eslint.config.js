import config from "@repo/eslint-config/library";

export default [
  ...config,
  { ignores: ["lib/generated/*"] },
  {
    rules: {
      "turbo/no-undeclared-env-vars": ["error", { allowList: ["NODE_ENV"] }]
    }
  }
];

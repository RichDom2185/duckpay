import { AccountsApi, TokensApi } from "@repo/api";

export const api = {
  accounts: new AccountsApi(),
  tokens: new TokensApi()
};

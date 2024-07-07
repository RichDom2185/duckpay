import { Account } from "@repo/accounts";
import AccountApi from "./accountApi";

export class AccountsApi extends AccountApi {
  constructor() {
    super();
    this.extendBasePath("/accounts");
  }

  public async createNewAccount() {
    return this.post<Account>("/create");
  }

  public async deleteAccount(accountId: string) {
    return this.delete<Account>(`/${accountId}`);
  }
}

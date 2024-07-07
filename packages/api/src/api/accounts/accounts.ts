import { Account } from "@repo/accounts";
import AccountBaseApi from "./accountBaseApi";

export class AccountsApi extends AccountBaseApi {
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

import { Account } from "@repo/accounts";
import { IAccountRepository } from "./account.repository";

export interface IAccountService {
  createAccount(): Promise<Account | null>;
}

export default class AccountService implements IAccountService {
  constructor(private accountRepository: IAccountRepository) {}

  async createAccount(): Promise<Account | null> {
    return this.accountRepository.createAccount();
  }
}

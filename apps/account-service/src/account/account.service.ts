import { Account } from "@repo/accounts";
import { IAccountRepository } from "./account.repository";

export interface IAccountService {
  createAccount(): Promise<Account | null>;
  deleteAccount(accountId: string): Promise<Account | null>;
  checkAccountExists(accountId: string): Promise<boolean>;
}

export default class AccountService implements IAccountService {
  constructor(private accountRepository: IAccountRepository) {}

  async createAccount(): Promise<Account | null> {
    return this.accountRepository.create();
  }

  async deleteAccount(accountId: string): Promise<Account | null> {
    return this.accountRepository.deleteById(accountId);
  }

  async checkAccountExists(accountId: string): Promise<boolean> {
    const account = await this.accountRepository.findById(accountId);
    return !!account;
  }
}

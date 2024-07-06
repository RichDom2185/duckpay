import { PrismaClient, Account } from "@repo/accounts";

export interface IAccountRepository {
  createAccount(): Promise<Account | null>;
}

export default class AccountRepository implements IAccountRepository {
  constructor(private db: PrismaClient) {}

  async createAccount(): Promise<Account> {
    return this.db.account.create({
      data: {}
    });
  }
}

import { Account, PrismaClient } from "@repo/accounts";

export interface IAccountRepository {
  findById(accountId: string): Promise<Account | null>;
  createAccount(): Promise<Account | null>;
  deleteAccount(accountId: string): Promise<Account | null>;
}

export default class AccountRepository implements IAccountRepository {
  constructor(private db: PrismaClient) {}

  findById(accountId: string): Promise<Account | null> {
    return this.db.account.findUnique({
      where: { id: accountId },
    });
  }

  async createAccount(): Promise<Account> {
    return this.db.account.create({
      data: {},
    });
  }

  async deleteAccount(accountId: string): Promise<Account> {
    return this.db.account.update({
      where: {
        id: accountId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}

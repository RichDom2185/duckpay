import { Account, PrismaClient } from "@repo/accounts";

export interface IAccountRepository {
  findById(accountId: string): Promise<Account | null>;
  create(): Promise<Account | null>;
  deleteById(accountId: string): Promise<Account | null>;
}

export default class AccountRepository implements IAccountRepository {
  constructor(private db: PrismaClient) {}

  findById(accountId: string): Promise<Account | null> {
    return this.db.account.findUnique({
      where: { id: accountId, deletedAt: null }
    });
  }

  async create(): Promise<Account> {
    return this.db.account.create({ data: {} });
  }

  async deleteById(accountId: string): Promise<Account> {
    return this.db.account.update({
      where: { id: accountId, deletedAt: null },
      data: { deletedAt: new Date() }
    });
  }
}

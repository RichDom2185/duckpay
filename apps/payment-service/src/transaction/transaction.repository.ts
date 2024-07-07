import { PrismaClient, Transaction } from "@repo/payments";

export interface ITransactionRepository {
  create(
    transaction: Pick<Transaction, "amount" | "tokenId" | "currency">
  ): Promise<Transaction | null>;
}

export default class TransactionRepository implements ITransactionRepository {
  constructor(private db: PrismaClient) {}

  async create(
    transaction: Pick<Transaction, "amount" | "tokenId" | "currency">
  ): Promise<Transaction | null> {
    return this.db.transaction.create({ data: transaction });
  }
}

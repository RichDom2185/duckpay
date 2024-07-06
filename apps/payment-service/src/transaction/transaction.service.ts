import { Transaction } from "@repo/payments";
import { ITokenRepository } from "../tokens/token.repository";
import { ITransactionRepository } from "./transaction.repository";

export interface ITransactionService {
  deposit(accountId: string, amount: number): Promise<Transaction | null>;
  withdraw(tokenId: string): Promise<Transaction | null>;
}

export default class TransactionService implements ITransactionService {
  constructor(
    private transactionRepository: ITransactionRepository,
    private tokenRepository: ITokenRepository
  ) {}

  async deposit(
    accountId: string,
    amount: number,
    currency: string = "SGD"
  ): Promise<Transaction | null> {
    const token = await this.tokenRepository.create({
      accountId,
      amount: amount,
      currency,
    });

    return this.transactionRepository.create({
      currency,
      amount,
      tokenId: token.id,
    });
  }

  async withdraw(tokenId: string): Promise<Transaction | null> {
    const token = await this.tokenRepository.deleteById(tokenId);

    return this.transactionRepository.create({
      tokenId: token.id,
      amount: -token.amount,
      currency: token.currency,
    });
  }
}

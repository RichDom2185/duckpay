import { PrismaClient } from "@repo/payments";
import { DIContainer } from "rsdi";
import TokenController from "../../tokens/token.controller";
import TokenRepository from "../../tokens/token.repository";
import TokenService from "../../tokens/token.service";
import TransactionRepository from "../../transaction/transaction.repository";
import TransactionService from "../../transaction/transaction.service";
import TransactionController from "../../transaction/transaction.controller";

export type AppDIContainer = ReturnType<typeof configureDI>;

export function configureDI() {
  const container = new DIContainer()
    // DB Configuration
    .add("db", () => new PrismaClient())
    // Tokens
    .add("tokenRepository", ({ db }) => new TokenRepository(db))
    .add(
      "tokenService",
      ({ tokenRepository }) => new TokenService(tokenRepository),
    )
    .add(
      "tokenController",
      ({ tokenService }) => new TokenController(tokenService),
    )
    // Transactions
    .add("transactionRepository", ({ db }) => new TransactionRepository(db))
    .add(
      "transactionService",
      ({ transactionRepository, tokenRepository }) =>
        new TransactionService(transactionRepository, tokenRepository),
    )
    .add(
      "transactionController",
      ({ transactionService }) => new TransactionController(transactionService),
    );

  return container;
}

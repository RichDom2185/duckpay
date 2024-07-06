import { PrismaClient } from "@repo/payments";
import { DIContainer } from "rsdi";
import AccountServiceGateway from "../../gateways/account-service";
import TokenController from "../../tokens/token.controller";
import TokenRepository from "../../tokens/token.repository";
import TokenService from "../../tokens/token.service";
import TransactionController from "../../transaction/transaction.controller";
import TransactionRepository from "../../transaction/transaction.repository";
import TransactionService from "../../transaction/transaction.service";

export type AppDIContainer = ReturnType<typeof configureDI>;

export function configureDI() {
  const container = new DIContainer()
    // DB Configuration
    .add("db", () => new PrismaClient())
    // Gateways
    .add("accountServiceGateway", () => new AccountServiceGateway())
    // Tokens
    .add("tokenRepository", ({ db }) => new TokenRepository(db))
    .add(
      "tokenService",
      ({ accountServiceGateway, tokenRepository }) =>
        new TokenService(accountServiceGateway, tokenRepository)
    )
    .add(
      "tokenController",
      ({ tokenService }) => new TokenController(tokenService)
    )
    // Transactions
    .add("transactionRepository", ({ db }) => new TransactionRepository(db))
    .add(
      "transactionService",
      ({ transactionRepository, tokenRepository }) =>
        new TransactionService(transactionRepository, tokenRepository)
    )
    .add(
      "transactionController",
      ({ transactionService }) => new TransactionController(transactionService)
    );

  return container;
}

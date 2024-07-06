import { PrismaClient } from "@repo/accounts";
import { DIContainer } from "rsdi";
import AccountController from "../../account/account.controller";
import AccountRepository from "../../account/account.repository";
import AccountService from "../../account/account.service";
import InternalController from "../../private/internal.controller";

export type AppDIContainer = ReturnType<typeof configureDI>;

export function configureDI() {
  const container = new DIContainer()
    // DB Configuration
    .add("db", () => new PrismaClient())
    // Tokens
    .add("accountRepository", ({ db }) => new AccountRepository(db))
    .add(
      "accountService",
      ({ accountRepository }) => new AccountService(accountRepository)
    )
    .add(
      "accountController",
      ({ accountService }) => new AccountController(accountService)
    )
    .add(
      "internalController",
      ({ accountService }) => new InternalController(accountService)
    );

  return container;
}

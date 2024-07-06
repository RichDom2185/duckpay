import { PrismaClient } from "@repo/payments";
import { DIContainer } from "rsdi";
import TokenController from "../../tokens/token.controller";
import TokenRepository from "../../tokens/token.repository";
import TokenService from "../../tokens/token.service";

export type AppDIContainer = ReturnType<typeof configureDI>;

export function configureDI() {
  const container = new DIContainer()
    // DB Configuration
    .add("db", () => new PrismaClient())
    // Tokens
    .add("tokenRepository", ({ db }) => new TokenRepository(db))
    .add(
      "tokenService",
      ({ tokenRepository }) => new TokenService(tokenRepository)
    )
    .add(
      "tokenController",
      ({ tokenService }) => new TokenController(tokenService)
    );

  return container;
}

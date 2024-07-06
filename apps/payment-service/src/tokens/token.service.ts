import { Token } from "@repo/payments";
import AccountServiceGateway from "../gateways/account-service";
import { ITokenRepository } from "./token.repository";

export interface ITokenService {
  registerToken(
    tokenId: string,
    accountId: string
  ): Promise<Array<Token> | null>;
  getAllTokensForUser(accountId: string): Promise<Array<Token> | null>;
}

export default class TokenService implements ITokenService {
  constructor(
    private accountServiceGateway: AccountServiceGateway,
    private tokenRepository: ITokenRepository
  ) {}

  async registerToken(
    tokenId: string,
    accountId: string
  ): Promise<Array<Token> | null> {
    const token = await this.tokenRepository.findById(tokenId);
    if (!token) {
      throw new Error("Token not found");
    }

    token.accountId = accountId;
    this.tokenRepository.update(token);

    return this.getAllTokensForUser(accountId);
  }

  async getAllTokensForUser(accountId: string): Promise<Array<Token> | null> {
    const { exists } =
      await this.accountServiceGateway.checkAccountExists(accountId);
    if (!exists) {
      throw new Error("Account not found");
    }
    return this.tokenRepository.findByAccount(accountId);
  }
}

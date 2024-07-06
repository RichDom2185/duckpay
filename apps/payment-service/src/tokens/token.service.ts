import { Token } from "@repo/payments";
import { ITokenRepository } from "./token.repository";

export interface ITokenService {
  registerToken(
    tokenId: string,
    accountId: string
  ): Promise<Array<Token> | null>;
  getAllTokensForUser(accountId: string): Promise<Array<Token> | null>;
}

export default class TokenService implements ITokenService {
  constructor(private tokenRepository: ITokenRepository) {}

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
    // TODO: Check user exists
    return this.tokenRepository.findByAccount(accountId);
  }
}

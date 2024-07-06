import { Token } from "@repo/payments";
import { ITokenRepository } from "./token.repository";

export interface ITokenService {
  getAllTokensForUser(accountId: string): Promise<Array<Token> | null>;
}

export default class TokenService implements ITokenService {
  constructor(private tokenRepository: ITokenRepository) {}

  async getAllTokensForUser(accountId: string): Promise<Array<Token> | null> {
    // TODO: Check user exists
    return this.tokenRepository.findTokenByAccount(accountId);
  }
}

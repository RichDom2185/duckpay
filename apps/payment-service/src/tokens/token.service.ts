import { Token } from "@repo/payments";
import AccountServiceGateway from "../gateways/account-service";
import { ITokenRepository } from "./token.repository";

export interface ITokenService {
  registerToken(
    tokenId: string,
    accountId: string
  ): Promise<Array<Token> | null>;
  getAllTokensForUser(accountId: string): Promise<Array<Token> | null>;
  mergeTokens(tokenIds: Array<string>): Promise<Token>;
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

  async mergeTokens(tokenIds: Array<string>): Promise<Token> {
    if (tokenIds.length === 0) {
      throw new Error("No tokens to merge");
    }
    const uniqueSet = new Set(tokenIds);
    if (uniqueSet.size !== tokenIds.length) {
      throw new Error("Duplicate token IDs");
    }
    const tokensToMerge = await this.tokenRepository.findAllByIds(tokenIds);
    if (tokensToMerge.length !== tokenIds.length) {
      throw new Error("Some tokens not found");
    }
    const tokenCurrencies = new Set(
      tokensToMerge.map((token) => token.currency)
    );
    if (tokenCurrencies.size !== 1) {
      throw new Error("Tokens have different currencies");
    }
    const tokenAccounts = new Set(
      tokensToMerge.map((token) => token.accountId)
    );
    if (tokenAccounts.size !== 1) {
      throw new Error("Tokens belong to different accounts");
    }

    const totalAmount = tokensToMerge.reduce(
      (acc, token) => acc + token.amount,
      0
    );

    const newToken = await this.tokenRepository.create({
      amount: totalAmount,
      currency: tokensToMerge[0].currency,
      accountId: tokensToMerge[0].accountId
    });
    return newToken;
  }
}

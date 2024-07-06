import { PrismaClient, Token } from "@repo/payments";

export interface ITokenRepository {
  findTokenByAccoutn(account: string): Promise<Array<Token>>;
}

export default class TokenRepository implements ITokenRepository {
  constructor(private db: PrismaClient) {}

  async findTokenByAccoutn(account: string): Promise<Array<Token>> {
    return this.db.token.findMany({ where: { accountId: account } });
  }
}

import { PrismaClient, Token } from "@repo/payments";

export interface ITokenRepository {
  findByAccount(accountId: string): Promise<Array<Token>>;
}

export default class TokenRepository implements ITokenRepository {
  constructor(private db: PrismaClient) {}

  async findByAccount(accountId: string): Promise<Array<Token>> {
    return this.db.token.findMany({ where: { accountId } });
  }
}

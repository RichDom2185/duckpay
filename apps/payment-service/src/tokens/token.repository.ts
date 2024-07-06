import { PrismaClient, Token } from "@repo/payments";

export interface ITokenRepository {
  findById(id: string): Promise<Token | null>;
  findByAccount(accountId: string): Promise<Array<Token>>;
  update(token: Token): Promise<Token>;
}

export default class TokenRepository implements ITokenRepository {
  constructor(private db: PrismaClient) {}

  async findById(id: string): Promise<Token | null> {
    return this.db.token.findFirst({ where: { id } });
  }

  async findByAccount(accountId: string): Promise<Array<Token>> {
    return this.db.token.findMany({ where: { accountId } });
  }

  async update(token: Token): Promise<Token> {
    return this.db.token.update({ where: { id: token.id }, data: token });
  }
}

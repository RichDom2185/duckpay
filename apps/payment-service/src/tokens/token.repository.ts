import { PrismaClient, Token } from "@repo/payments";

export interface ITokenRepository {
  findById(id: string): Promise<Token | null>;
  findByAccount(accountId: string): Promise<Array<Token>>;
  update(token: Token): Promise<Token>;
  create(
    token: Pick<Token, "amount" | "currency" | "accountId">,
  ): Promise<Token>;
  deleteById(id: string): Promise<Token>;
}

export default class TokenRepository implements ITokenRepository {
  constructor(private db: PrismaClient) {}

  async findById(id: string): Promise<Token | null> {
    return this.db.token.findFirst({ where: { id, deletedAt: null } });
  }

  async findByAccount(accountId: string): Promise<Array<Token>> {
    return this.db.token.findMany({ where: { accountId, deletedAt: null } });
  }

  async update(token: Token): Promise<Token> {
    return this.db.token.update({
      where: { id: token.id, deletedAt: null },
      data: token,
    });
  }

  async create(
    token: Pick<Token, "amount" | "currency" | "accountId">,
  ): Promise<Token> {
    return this.db.token.create({ data: token });
  }

  async deleteById(id: string): Promise<Token> {
    console.log("Deleting token with id repo!!!", id);
    return this.db.token.update({
      where: { id, deletedAt: null },
      data: { deletedAt: new Date()},
    });
  }
}

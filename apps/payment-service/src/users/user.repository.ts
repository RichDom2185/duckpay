import { PrismaClient, User } from "@repo/database";

export interface IUserRepository {
  findUserById(id: string): Promise<User | null>;
}

export default class UserRepository implements IUserRepository {
  constructor(private db: PrismaClient) {}

  async findUserById(id: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { id } });
  }
}

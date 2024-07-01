import { PrismaClient, User } from "@repo/database";

export interface IUserRepository {
  findUserById(id: string): Promise<User | null>;
}

class UserRepository {
  private client: PrismaClient;
  constructor(client: PrismaClient) {
    this.client = client;
  }

  async findUserById(id: string): Promise<User | null> {
    return this.client.user.findUnique({ where: { id } });
  }
}

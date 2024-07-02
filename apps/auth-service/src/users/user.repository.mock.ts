import { User } from "@repo/database";
import { IUserRepository } from "./user.repository";

export default class MockUserRepository implements IUserRepository {
  async findUserById(id: string): Promise<User | null> {
    const fakeUser: User = {
      id,
      name: `User ${id}`,
      email: `${id}${id}@example.com`,
      emailVerified: new Date(),
    };
    return fakeUser;
  }
}

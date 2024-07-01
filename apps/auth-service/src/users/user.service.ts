import { User } from "@repo/database";
import { IUserRepository } from "./user.repository";

export interface IUserService {
  getUser(id: string): Promise<User | null>;
}

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async getUser(id: string): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }
}

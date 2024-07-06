import { PrismaClient } from "@repo/database";
import { DIContainer } from "rsdi";
import UserController from "../../users/user.controller";
import MockUserRepository from "../../users/user.repository.mock";
import UserService from "../../users/user.service";

export type AppDIContainer = ReturnType<typeof configureDI>;

export function configureDI() {
  const container = new DIContainer()
    // DB Configuration
    .add("db", () => new PrismaClient())
    // Users
    // .add("userRepository", ({ db }) => new UserRepository(db))
    .add("userRepository", () => new MockUserRepository())
    .add("userService", ({ userRepository }) => new UserService(userRepository))
    .add(
      "userController",
      ({ userService }) => new UserController(userService)
    );

  return container;
}

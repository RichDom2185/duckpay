import { createController } from "../internal/utils/controller";
import { IUserRepository } from "./user.repository";

class _UsersController {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  get userRepository() {
    return this._userRepository;
  }
}

const UsersController = createController(_UsersController, {
  async getHello(req, res) {
    console.log(this.userRepository);
    res.send("Hello from users controller!");
  },
});

const controller = new UsersController("test" as any);

export default controller;

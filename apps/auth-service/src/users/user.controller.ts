import { createController } from "../internal/utils/controller";
import { IUserService } from "./user.service";

class _UsersController {
  constructor(private userService: IUserService) {}
}

const UsersController = createController(_UsersController, {
  async getHello(req, res) {
    res.send("Hello from users controller!");
  },
});

export default UsersController;

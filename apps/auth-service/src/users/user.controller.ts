import { createController } from "../internal/utils/controller";
import { IUserService } from "./user.service";

class _UserController {
  constructor(private userService: IUserService) {}
}

const UserController = createController(_UserController, {
  async getHello(req, res) {
    res.send("Hello from users controller!");
  },
});

export default UserController;

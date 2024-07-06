import { createController } from "../internal/utils/controller";
import { IAccountService } from "./account.service";

class _AccountController {
  constructor(public accountService: IAccountService) {}
}

const AccountController = createController(_AccountController, {
  async createAccount(req, res) {
    const account = await this.accountService.createAccount();
    res.send(account);
  },
});

export default AccountController;

import { IAccountService } from "../account/account.service";
import { createController } from "../internal/utils/controller";

class _InternalController {
  constructor(public accountService: IAccountService) {}
}

const InternalController = createController(_InternalController, {
  async checkAccountExists(req, res) {
    const id = req.body.id;
    const exists = await this.accountService.checkAccountExists(id);
    res.json({ id, exists });
  },
});

export default InternalController;

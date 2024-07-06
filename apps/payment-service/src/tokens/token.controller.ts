import { createController } from "../internal/utils/controller";
import { ITokenService } from "./token.service";

class _TokenController {
  constructor(public tokenService: ITokenService) {}
}

const TokenController = createController(_TokenController, {
  async getTokens(req, res) {
    const accountId = req.query.accountId;
    if (!accountId) {
      res.status(400).send("Missing account ID");
      return;
    }
    if (typeof accountId !== "string") {
      res.status(422).send("Invalid account ID");
    }
    const tokens = await this.tokenService.getAllTokensForUser(
      accountId as string
    );
    res.send(tokens);
  },
});

export default TokenController;

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
      return;
    }

    const oneWeekLater = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    res.cookie("accountId", accountId, {
      expires: oneWeekLater,
      sameSite: true,
      secure: true
    });

    const tokens = await this.tokenService.getAllTokensForUser(accountId);
    res.json(tokens);
  },

  async registerTokenForUser(req, res) {
    const { accountId, tokenId } = req.body;
    // TODO: Validate params
    if (!accountId) {
      res.status(400).send("Missing account ID");
      return;
    }
    if (typeof accountId !== "string") {
      res.status(422).send("Invalid account ID");
      return;
    }

    const tokens = await this.tokenService.registerToken(tokenId, accountId);
    res.json(tokens);
  },

  async merge(req, res) {
    const { tokenIds } = req.body;
    if (!tokenIds) {
      res.status(400).send("Missing token IDs");
      return;
    }
    if (!Array.isArray(tokenIds)) {
      res.status(422).send("Invalid token IDs");
      return;
    }

    const newToken = await this.tokenService.mergeTokens(tokenIds);
    res.json(newToken);
  },

  async split(req, res) {
    const { tokenId } = req.params;
    const { amounts } = req.body;
    if (!amounts) {
      res.status(400).send("Missing amounts");
      return;
    }
    if (!Array.isArray(amounts)) {
      res.status(422).send("Invalid amounts");
      return;
    }
    const newTokens = await this.tokenService.splitToken(tokenId, amounts);
    res.json(newTokens);
  }
});

export default TokenController;

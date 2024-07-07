import { createController } from "../internal/utils/controller";
import { ITransactionService } from "./transaction.service";

class _TransactionController {
  constructor(public transactionService: ITransactionService) {}
}

const TransactionController = createController(_TransactionController, {
  async deposit(req, res) {
    const { amount, accountId } = req.body;

    if (!accountId) {
      res.status(400).send("Missing account ID");
      return;
    }
    if (typeof accountId !== "string") {
      res.status(422).send("Invalid account ID");
      return;
    }

    if (amount == undefined) {
      res.status(400).send("Missing amount");
      return;
    }
    if (amount <= 0) {
      res.status(422).send("You can only deposit a positive amount");
      return;
    }

    const transaction = await this.transactionService.deposit(
      accountId,
      amount
    );

    res.json(transaction);
  },

  async withdraw(req, res) {
    const { tokenId } = req.body;

    if (!tokenId) {
      res.status(400).send("Missing token ID");
      return;
    }

    const transaction = await this.transactionService.withdraw(tokenId);

    res.json(transaction);
  }
});

export default TransactionController;

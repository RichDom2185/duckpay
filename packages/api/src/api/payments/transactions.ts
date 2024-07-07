import { Transaction } from "@repo/payments";
import PaymentBaseApi from "./paymentBaseApi";

export class TransactionsApi extends PaymentBaseApi {
  constructor() {
    super();
    this.extendBasePath("/transactions");
  }

  public async createDeposit(amount: number, accountId: string) {
    return this.post<Transaction>("/deposit", { amount, accountId });
  }

  public async createWithdrawal(tokenId: string) {
    return this.post<Transaction>("/withdraw", { tokenId });
  }
}

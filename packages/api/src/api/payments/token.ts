import { Token } from "@repo/payments";
import PaymentBaseApi from "./paymentBaseApi";

export class TokensApi extends PaymentBaseApi {
  constructor() {
    super();
    this.extendBasePath("/tokens");
  }

  public async getTokensUnderAccount(accountId: string) {
    return this.get<Token[]>(`/?accountId=${accountId}`);
  }

  public async registerTokenForUser(accountId: string, tokenId: string) {
    return this.post<Token[]>("/consume", { accountId, tokenId });
  }
}

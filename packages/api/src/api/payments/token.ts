import { Token } from "@repo/payments";
import PaymentApi from "./paymentApi";

export class TokensApi extends PaymentApi {
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

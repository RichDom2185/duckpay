import axios from "axios";
import { Gateway } from "../gateway";

const ACCOUNT_SERVICE_URL = "http://account-service:8002/accounts/internal";

const client = axios.create({
  baseURL: ACCOUNT_SERVICE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

class AccountServiceGateway extends Gateway {
  constructor() {
    super(client);
  }

  public async checkAccountExists(
    accountId: string
  ): Promise<{ id: string; exists: boolean }> {
    return this.get<{ id: string; exists: boolean }>("/check-account-exists", {
      id: accountId
    });
  }
}

export default AccountServiceGateway;

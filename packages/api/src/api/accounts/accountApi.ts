import BaseApi from "../baseApi";

class AccountApi extends BaseApi {
  private _extendPath = "/accounts";

  constructor() {
    super();
    this.extendBasePath(this._extendPath);
  }
}

export default AccountApi;

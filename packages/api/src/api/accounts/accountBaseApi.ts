import BaseApi from "../baseApi";

class AccountBaseApi extends BaseApi {
  private _extendPath = "/accounts";

  constructor() {
    super();
    this.extendBasePath(this._extendPath);
  }
}

export default AccountBaseApi;

import BaseApi from "../baseApi";

class PaymentBaseApi extends BaseApi {
  private _extendPath = "/payments";

  constructor() {
    super();
    this.extendBasePath(this._extendPath);
  }
}

export default PaymentBaseApi;

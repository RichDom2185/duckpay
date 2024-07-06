import BaseApi from "../baseApi";

class PaymentApi extends BaseApi {
  private _extendPath = "/payments";

  constructor() {
    super();
    this.extendBasePath(this._extendPath);
  }
}

export default PaymentApi;

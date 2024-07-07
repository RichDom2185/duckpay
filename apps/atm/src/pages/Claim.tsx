import React, { useState } from "react";
import duckpay from "../../assets/duck-transparent-bg.png";
import Page from "../components/common/Page";
import Constants from "../utils/constants";

const Claim: React.FC = () => {
  // Since we don't actually have money collecting hardware
  const [amount] = useState(Math.floor(Math.random() * 15) * 10);
  const [accountId, setAccountId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > Constants.ACCOUNT_KEY_LENGTH) return;
    setAccountId(e.target.value);
  };

  return (
    <Page>
      <div className="text-3xl w-96 flex flex-col gap-y-8 items-center justify-center h-full">
        <img className="h-64" src={duckpay} alt="DuckPay Logo" />
        <h3 className="font-medium tracking-wide">
          Amount to deposit: <span className="font-extrabold">${amount}</span>
        </h3>
        <label className="input input-bordered w-full flex items-center gap-2">
          <input
            autoFocus
            type="text"
            className="grow"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            value={accountId}
            onChange={handleChange}
            placeholder="Enter Account ID"
          />
          {accountId.length !== Constants.ACCOUNT_KEY_LENGTH && (
            <span className="text-gray-600">
              {Constants.ACCOUNT_KEY_LENGTH - accountId.length}
            </span>
          )}
        </label>
        <button
          className="btn btn-block btn-neutral"
          disabled={accountId.length !== Constants.ACCOUNT_KEY_LENGTH}
        >
          Claim Amount
        </button>
      </div>
    </Page>
  );
};

export const Component = Claim;
Component.displayName = "Claim";

export default Claim;

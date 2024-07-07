import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import duckpay from "../../assets/duck-transparent-bg.png";
import { api } from "../api/api";
import Page from "../components/common/Page";
import Constants from "../utils/constants";

const Claim: React.FC = () => {
  // Since we don't actually have money collecting hardware
  const [amount] = useState(Math.floor(Math.random() * 15) * 10);
  const [accountId, setAccountId] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.value.length > Constants.ACCOUNT_KEY_LENGTH) return;
      setAccountId(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(() => {
    api.transactions.createDeposit(amount, accountId).then((tx) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully deposited ${tx.currency}${tx.amount} to account ${accountId}!`,
        showConfirmButton: false,
        timer: 1500
      });
    });
  }, [accountId, amount]);

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
          onClick={onSubmit}
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

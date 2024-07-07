import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import duckpay from "../../assets/duck-transparent-bg.png";
import { api } from "../api/api";
import Page from "../components/common/Page";
import { RouteNames } from "../routes/routes";

enum FACING_MODE {
  USER = "user",
  ENVIRONMENT = "environment"
}

const spacer = <div className="h-14" />;

const Withdraw: React.FC = () => {
  const navigate = useNavigate();
  const handleScan = useCallback(
    async (detectedCodes: IDetectedBarcode[]) => {
      const qrData = detectedCodes[0].rawValue;
      const parts = qrData.split(":");
      const tokenId = parts[1];

      api.transactions
        .createWithdrawal(tokenId)
        .then((tx) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully withdrew ${tx.currency}${tx.amount}!`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate(RouteNames.DONE);
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    },
    [navigate]
  );

  return (
    <Page>
      <div className="text-3xl flex flex-col gap-y-12 items-center justify-center h-full">
        {spacer}
        <img className="h-32" src={duckpay} alt="DuckPay Logo" />
        <h3 className="font-semibold tracking-wide">
          Please provide DuckPay QR code below:
        </h3>
        <div className="h-96">
          <Scanner
            onScan={handleScan}
            constraints={{
              aspectRatio: 16 / 9,
              frameRate: { ideal: 12 },
              deviceId: { ideal: "0" },
              facingMode: { ideal: FACING_MODE.ENVIRONMENT }
            }}
          />
        </div>
        {spacer}
      </div>
    </Page>
  );
};

export const Component = Withdraw;
Component.displayName = "Withdraw";

export default Withdraw;

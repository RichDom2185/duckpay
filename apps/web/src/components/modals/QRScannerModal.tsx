import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React from "react";
import Swal from "sweetalert2";
import { api } from "../../api/api";
import { Token } from "../../types/types";

interface QRScannerModalProps {
  isOpen: boolean;
  setTokens: (tokens: Token[]) => void;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
}

const enum FACING_MODE {
  USER = "user",
  ENVIRONMENT = "environment"
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  isOpen,
  setTokens,
  setIsOpen,
  onClose
}) => {
  const handleScan = async (detectedCodes: IDetectedBarcode[]) => {
    console.log(detectedCodes);
    const qrData = detectedCodes[0].rawValue;

    console.log("QR data:", qrData);
    const parts = qrData.split(":");
    const accountId = parts[0];
    const tokenId = parts[1];

    console.log("Account ID:", accountId);
    console.log("Token ID:", tokenId);

    // send API to db with accountId and tokenId
    try {
      const updatedUserTokens: Token[] = await api.tokens.registerTokenForUser(
        accountId,
        tokenId
      );
      setTokens(updatedUserTokens);
    } catch (err) {
      console.log(err);
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your token has been scanned",
      showConfirmButton: false,
      timer: 1500
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="scanner-container">
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
        <div className="flex justify-end space-x-3">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

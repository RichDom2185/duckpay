import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React from "react";
import Swal from "sweetalert2";

interface QRScannerModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onClose: () => void;
}

const enum FACING_MODE {
  USER = "user",
  ENVIRONMENT = "environment"
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  isOpen,
  setIsOpen,
  onClose
}) => {
  const handleScan = (detectedCodes: IDetectedBarcode[]) => {
    console.log(detectedCodes);
    const qrData = detectedCodes[0].rawValue;

    console.log("QR data:", qrData);
    const parts = qrData.split(":");
    if (parts.length === 2) {
      const accountId = parts[0];
      const tokenId = parts[1];

      console.log("Account ID:", accountId);
      console.log("Token ID:", tokenId);
    }

    // send API to db with accountId and tokenId

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
    <dialog className="modal bg-gray-500 bg-opacity-75" open>
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

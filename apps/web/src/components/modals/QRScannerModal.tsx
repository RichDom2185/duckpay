import { Scanner } from "@yudiel/react-qr-scanner";
import React from "react"; // Ensure React is imported if using JSX

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const enum FACING_MODE {
  USER = "user",
  ENVIRONMENT = "environment",
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  isOpen,
  onClose,
}) => {
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
            onScan={(result) => console.log(result)}
            constraints={{
              aspectRatio: 16 / 9,
              frameRate: { ideal: 12 },
              deviceId: { ideal: "0" },
              facingMode: { ideal: FACING_MODE.ENVIRONMENT },
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

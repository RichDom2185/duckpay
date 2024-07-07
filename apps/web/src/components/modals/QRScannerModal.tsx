import React from "react";
import toast from "react-hot-toast";
import { OnResultFunction, QrReader } from "react-qr-reader";
import Swal from "sweetalert2";
import { api } from "../../api/api";
import { SessionActions } from "../../redux/slices/sessionSlice";
import { useAppDispatch } from "../../redux/store";
import Modal from "../common/modals/Modal";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

enum FacingMode {
  USER = "user",
  ENVIRONMENT = "environment"
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  isOpen,
  onClose
}) => {
  const dispatch = useAppDispatch();

  const handleScan: OnResultFunction = async (result) => {
    if (!result) {
      return;
    }

    const qrData = result.getText();
    console.log("QR data:", qrData);
    const parts = qrData.split(":");
    const accountId = parts[0];
    const tokenId = parts[1];

    console.log("Account ID:", accountId);
    console.log("Token ID:", tokenId);

    // send API to db with accountId and tokenId
    api.tokens
      .registerTokenForUser(accountId, tokenId)
      .then((tokens) => {
        dispatch(SessionActions.setTokens(tokens));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your token has been scanned",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        onClose();
      });
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen onClickOutside={onClose} spacing="space-y-4">
      <QrReader
        onResult={handleScan}
        className="rounded-2xl overflow-hidden"
        constraints={{
          aspectRatio: 1,
          frameRate: { ideal: 12 },
          deviceId: { ideal: "0" },
          facingMode: { ideal: FacingMode.ENVIRONMENT }
        }}
      />
      <button className="btn btn-block" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

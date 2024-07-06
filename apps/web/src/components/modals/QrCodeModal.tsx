import React from "react";
import QrCodeGenerator from "../QrCodeGenerator";

interface QrCodeModalProps {
  accountId: string;
  tokenId: string;
  isOpen: boolean;
  onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({
  accountId,
  tokenId,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const qrData = accountId + ":" + tokenId;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <QrCodeGenerator data={qrData} />
        <div className="modal-action">
          <button onClick={onClose} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeModal;

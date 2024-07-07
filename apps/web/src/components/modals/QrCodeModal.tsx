import React from "react";
import QrCodeGenerator from "../QrCodeGenerator";
import { Token } from "../../types/types";
import TokenValueLabel from "../common/labels/TokenValueLabel";

interface QrCodeModalProps {
  token: Token;
  isOpen: boolean;
  onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({
  token,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const qrData = token.accountId + ":" + token.id;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <p className="pb-4 text-xl text-center">
          Scan this QR code to <i>Duckpay</i> with this token.
        </p>
        <QrCodeGenerator data={qrData} />
        <TokenValueLabel amount={token.amount} currency={token.currency} />
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

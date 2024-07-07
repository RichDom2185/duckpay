import React from "react";
import { Token } from "../../types/types";
import TokenValueLabel from "../common/labels/TokenValueLabel";
import Modal from "../common/modals/Modal";
import QrCodeGenerator from "../QrCodeGenerator";

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
  const qrData = token.accountId + ":" + token.id;

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose}>
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
    </Modal>
  );
};

export default QrCodeModal;

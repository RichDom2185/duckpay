import React from 'react';
import QrCodeGenerator from '../QrCodeGenerator';

interface QrCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <QrCodeGenerator data="abcde-fghij-klmno-pqrst" />
                <div className="modal-action">
                    <button onClick={onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    );
};

export default QrCodeModal;

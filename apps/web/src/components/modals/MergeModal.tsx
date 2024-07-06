import React from "react";
import Swal from "sweetalert2";

interface MergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenAmount1: string;
  tokenAmount2: string;
  tokenId1: string;
  tokenId2: string;
}

const MergeModal: React.FC<MergeModalProps> = ({
  isOpen,
  onClose,
  tokenAmount1,
  tokenAmount2,
  tokenId1,
  tokenId2,
}) => {
  if (!isOpen) return null;

  const totalTokenAmt = Number(tokenAmount1) + Number(tokenAmount2);

  const handleConfirm = () => {
    console.log(`Merging tokens ${tokenId1} and ${tokenId2}`);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tokens have been merged successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Confirmation</h3>
        <p className="py-4">
          Do you want to merge token <b>{tokenAmount1}</b> with{" "}
          <b>{tokenAmount2}</b> to create a new token with amount{" "}
          <b>{totalTokenAmt}</b>?
        </p>
        <div className="modal-action">
          <button className="btn" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MergeModal;

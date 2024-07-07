import React from "react";
import Swal from "sweetalert2";
import Modal from "../common/modals/Modal";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { SessionActions } from "../../redux/slices/sessionSlice";
import toast from "react-hot-toast";

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
  tokenId2
}) => {
  const dispatch = useDispatch();
  const totalTokenAmt = Number(tokenAmount1) + Number(tokenAmount2);

  const handleConfirm = () => {
    console.log(`Merging tokens ${tokenId1} and ${tokenId2}`);

    // API to merge
    api.tokens
      .mergeTokens([tokenId1, tokenId2])
      .then((tokens) => {
        dispatch(SessionActions.setTokens(tokens));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tokens have been merged successfully",
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

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose} spacing="space-4">
      <h3 className="font-bold text-lg">Confirmation</h3>
      <p className="py-4">
        Are you sure you want to merge the following tokens?
      </p>
      <div className="flex gap-x-2 justify-between items-stretch text-3xl font-bold h-40">
        <div className="rounded-2xl w-full bg-base-300 flex flex-col justify-center items-center gap-y-4">
          <span>${tokenAmount1}</span>
          <span>${tokenAmount2}</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="select-none">&rarr;</span>
        </div>
        <div className="rounded-2xl w-full bg-base-300 flex flex-col justify-center items-center">
          ${totalTokenAmt}
        </div>
      </div>
      <div className="modal-action">
        <button className="btn" onClick={handleConfirm}>
          Confirm
        </button>
        <button className="btn btn-ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default MergeModal;

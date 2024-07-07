import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { api } from "../../api/api";
import { SessionActions } from "../../redux/slices/sessionSlice";
import { SplitActions } from "../../redux/slices/splitSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Modal from "../common/modals/Modal";

const SplitModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedTokenAmount = useAppSelector(
    (state) => state.split.selectedTokenAmount
  );
  const selectedTokenId = useAppSelector(
    (state) => state.split.selectedTokenId ?? ""
  );
  const isOpen = useAppSelector((state) => state.split.isModalOpen);
  const [splitAmount, setSplitAmount] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    dispatch(SplitActions.closeSplitModal());
    setSplitAmount("");
    setError("");
  };

  const validateSplitInput = (input: string): number[] | null => {
    const values = input
      .split(",")
      .map((value) => parseFloat(value.trimEnd()))
      .filter((v) => !isNaN(v));
    const sum = values.reduce((acc, val) => acc + val, 0);

    if (values.some((value) => value <= 0)) {
      setError("Split values must be greater than 0.");
      return null;
    }

    if (selectedTokenAmount === null) {
      setError("Selected token amount is not valid.");
      return null;
    }

    if (sum > selectedTokenAmount) {
      setError(
        `Total split value of ${sum} exceeds the selected token amount of ${selectedTokenAmount}`
      );
      return null;
    }

    if (sum < selectedTokenAmount) {
      values.push(selectedTokenAmount - sum);
    }
    setError("");
    return values;
  };

  const handleConfirm = () => {
    const validatedValues = validateSplitInput(splitAmount);
    if (validatedValues) {
      // API to split
      api.tokens
        .splitToken(selectedTokenId, validatedValues)
        .then((tokens) => {
          dispatch(SessionActions.removeTokens([selectedTokenId]));
          dispatch(SessionActions.addTokens(tokens));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tokens have been split successfully",
            showConfirmButton: false,
            timer: 900
          });
        })
        .catch(() => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          handleClose();
        });
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <button
        onClick={handleClose}
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </button>
      <h3 className="font-bold text-lg">Split Token</h3>
      <p>How would you like to split this token?</p>
      <p>
        {" "}
        (please ensure that the total value does not exceed $
        {selectedTokenAmount})
      </p>
      <input
        placeholder="Enter split amount (e.g 5, 10)"
        className={`input input-bordered w-full mt-4 ${error ? "input-error" : ""}`}
        value={splitAmount}
        onChange={(e) => setSplitAmount(e.target.value)}
      />
      {error && <p className="text-error mt-1">{error}</p>}
      <div className="modal-action">
        <button onClick={handleConfirm} className="btn btn-primary">
          Confirm
        </button>
        <button onClick={handleClose} className="btn">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default SplitModal;

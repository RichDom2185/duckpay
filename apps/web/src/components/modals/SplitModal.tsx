import React, { useState } from "react";
import { SplitActions } from "../../redux/slices/splitSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Swal from "sweetalert2";

const SplitModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, selectedTokenAmount } = useAppSelector((state) => state.split);
  const [splitAmount, setSplitAmount] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    dispatch(SplitActions.closeSplitModal());
    setSplitAmount("");
    setError("");
  };

  const validateSplitInput = (input: string) : number[] | null => {
    const values = input.split(",").map(value => parseFloat(value.trimEnd())).filter(v => !isNaN(v));
    const sum = values.reduce((acc, val) => acc + val, 0);

    if (sum > selectedTokenAmount!) {
        setError(`Total split value of ${sum} exceeds the selected token amount of ${selectedTokenAmount}`);
        return null;
    }
    setError("");
    return values;
  }

  const handleConfirm = () => {
    // call api split here
    const validatedValues = validateSplitInput(splitAmount);
    if (validatedValues) {
        console.log(`Splitting token: ${validatedValues.join(', ')}`);

    
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tokens have been split successfully",
        showConfirmButton: false,
        timer: 900
      });
      handleClose();
    }
    
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <button onClick={handleClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">Split Token</h3>
        <p>How would you like to split this token?</p>
        <p> (please ensure that the total value does not exceed ${selectedTokenAmount})</p>
        <input
          placeholder="Enter split amount (e.g 5, 10)"
          className={`input input-bordered w-full mt-4 ${error ? 'input-error' : ''}`}
          value={splitAmount}
          onChange={(e) => setSplitAmount(e.target.value)}
        />
        {error && <p className="text-error mt-1">{error}</p>}
        <div className="modal-action">
          <button onClick={handleConfirm} className="btn btn-primary">Confirm</button>
          <button onClick={handleClose} className="btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SplitModal;

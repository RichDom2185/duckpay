import clsx from "clsx";
import React, { useState } from "react";
import Constants from "../../utils/constants";
import Modal from "../common/modals/Modal";

interface EnterKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnterKeyModal: React.FC<EnterKeyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [value, setValue] = useState("");

  const handleEnteredKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > Constants.ACCOUNT_KEY_LENGTH) return;
    setValue(e.target.value);
  };

  const handleSubmitEnteredKey = () => {
    console.log("Submitted Key: ", value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose} spacing="space-y-4">
      <h3 className="font-bold text-lg">Enter your key</h3>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          value={value}
          onChange={handleEnteredKeyChange}
          placeholder={"X".repeat(Constants.ACCOUNT_KEY_LENGTH)}
        />
        <span
          className={clsx(
            value.length === Constants.ACCOUNT_KEY_LENGTH
              ? "text-red-400"
              : "text-gray-600"
          )}
        >
          {Constants.ACCOUNT_KEY_LENGTH - value.length}
        </span>
      </label>

      <div className="flex justify-end space-x-3">
        <button className="btn" onClick={onClose}>
          Close
        </button>
        <button
          className="btn btn-accent"
          onClick={handleSubmitEnteredKey}
          disabled={value.trim().length != Constants.ACCOUNT_KEY_LENGTH}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

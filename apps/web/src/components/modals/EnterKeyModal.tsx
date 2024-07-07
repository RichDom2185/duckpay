import React, { useState } from "react";
import { KEY_LENGTH } from "../common/constants/constants";
import Modal from "../common/modals/Modal";

interface EnterKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnterKeyModal: React.FC<EnterKeyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [enteredKey, setEnteredKey] = useState("");

  const handleEnteredKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredKey(e.target.value);
  };

  const handleSubmitEnteredKey = () => {
    console.log("Submitted Key: ", enteredKey);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose}>
      <button
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={onClose}
      >
        ✕
      </button>
      <h3 className="font-bold text-lg">Enter your key!</h3>
      <div className="relative py-5">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={enteredKey}
          onChange={handleEnteredKeyChange}
          placeholder="Enter your key here..."
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          className="btn"
          onClick={handleSubmitEnteredKey}
          disabled={enteredKey.trim().length != KEY_LENGTH}
        >
          Submit
        </button>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

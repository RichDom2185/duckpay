import React from "react";
import { copyToClipboard } from "../common/utils/utils";

interface GenerateKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenerateKeyModal: React.FC<GenerateKeyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const generatedKey = "jdf0s9fyBqfi5A4Q2ysP"; // This could be dynamically generated or fetched if needed

  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedKey);
    setHasCopied(success);
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Here is your key!</h3>
        <div className="relative py-5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={generatedKey}
            disabled
            readOnly
          />
          <button
            className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
            onClick={handleCopy}
          >
            <span className="w-3.5 h-3.5">
              {hasCopied ? (
                <svg
                  className="w-3.5 h-3.5 text-green-500 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className="flex justify-end">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

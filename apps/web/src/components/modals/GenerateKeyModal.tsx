import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import Modal from "../common/modals/Modal";
import { copyToClipboard } from "../common/utils/utils";
import { useDispatch } from "react-redux";
import { SessionActions } from "../../redux/slices/sessionSlice";
import { useAppSelector } from "../../redux/store";

interface GenerateKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenerateKeyModal: React.FC<GenerateKeyModalProps> = ({
  isOpen,
  onClose
}) => {
  const displayGeneratedKeyWithHyphen = (generatedKey: string): string => {
    return generatedKey.replace(/(.{5})/g, "$1-").slice(0, -1);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedKey);
    setHasCopied(success);
  };

  const generatedKey = useAppSelector((state) => state.session.accountId) ?? "";

  const displayGeneratedKey = displayGeneratedKeyWithHyphen(generatedKey);

  const [hasCopied, setHasCopied] = React.useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} onClickOutside={onClose}>
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
          value={displayGeneratedKey}
          disabled
          readOnly
        />
        <button
          className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
          onClick={handleCopy}
        >
          <span className="w-3.5 h-3.5">
            {hasCopied ? (
              <Icon
                className="text-green-500 dark:text-blue-500"
                icon="tabler:check"
              />
            ) : (
              <Icon icon="tabler:copy" />
            )}
          </span>
        </button>
      </div>
      <div className="flex justify-end">
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

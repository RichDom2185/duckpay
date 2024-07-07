interface DuckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DuckModal: React.FC<DuckModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal bg-gray-500 bg-opacity-75" open>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg pb-4">Hello, DuckPayer!</h3>
        <p>
          DuckPay (Digital Unsigned Cheque Key) was built to help you make
          efficient payments without needing a bank account nor a login account,
          with an intuitive single page application. We hope you enjoy using
          duckpay❤️
        </p>
        <br />
        <p>- DuckPay engineering team (Richard, Jing Sheng, Donovan, Wen Li)</p>
        <div className="flex justify-end">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

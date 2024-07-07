import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClickOutside?: () => void;
};

const Modal: React.FC<Props> = ({ children, isOpen, onClickOutside }) => {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">{children}</div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={onClickOutside}
      />
    </dialog>
  );
};

export default Modal;

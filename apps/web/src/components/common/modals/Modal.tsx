import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-box">{children}</div>
    </dialog>
  );
};

export default Modal;

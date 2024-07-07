import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <dialog className="modal" open={isOpen}>
      {children}
    </dialog>
  );
};

export default Modal;

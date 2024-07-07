import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  spacing?: string;
  onClickOutside?: () => void;
};

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  spacing,
  onClickOutside
}) => {
  return (
    <dialog className={clsx("modal", isOpen && "modal-open")} open={isOpen}>
      <div className={clsx("modal-box", spacing)}>{children}</div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={onClickOutside}
      />
    </dialog>
  );
};

export default Modal;

import clsx from "clsx";
import React from "react";
import { Toast as ToastType, resolveValue } from "react-hot-toast";

type Props = {
  toast: ToastType;
};

const Toast: React.FC<Props> = ({ toast: t }) => {
  return (
    <div
      className={clsx(
        "alert",
        t.type === "error" && "alert-error",
        t.type === "success" && "alert-success",
        t.type !== "error" && t.type !== "success" && "alert-info"
      )}
    >
      {resolveValue(t.message, t)}
    </div>
  );
};

// Memoize the component to prevent re-renders
// and crashing when trying to remove a toast.
const MemoizedToast = React.memo(Toast, () => true);

export default MemoizedToast;

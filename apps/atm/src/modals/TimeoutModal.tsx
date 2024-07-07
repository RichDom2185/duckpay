import React, { useCallback, useEffect, useState } from "react";
import Modal from "../components/common/modals/Modal";
import { SessionActions } from "../redux/slices/sessionSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const TIMEOUT_SECONDS = 15;

const TimeoutModal: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleTimeout = useCallback(() => {
    dispatch(SessionActions.setTimeout(true));
  }, [dispatch]);
  const handleTimeoutCancel = useCallback(() => {
    dispatch(SessionActions.setTimeout(false));
  }, [dispatch]);

  const isTimeout = useAppSelector((state) => state.session.isTimeout);
  // Reset timer whenever the modal is redisplayed
  useEffect(() => {
    if (isTimeout === undefined) {
      setTimerState(TIMEOUT_SECONDS);
    }
  }, [isTimeout]);

  const [timerState, setTimerState] = useState(TIMEOUT_SECONDS);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerState((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timerState === 0) {
      handleTimeout();
    }
  }, [handleTimeout, timerState]);

  return (
    <Modal
      isOpen={isTimeout === undefined}
      onClickOutside={handleTimeoutCancel}
      spacing="space-y-4"
    >
      <h2 className="text-2xl font-bold">Are you still there?</h2>
      <p className="text-lg">
        Your session will be cleared in {timerState} second
        {timerState !== 1 ? "s" : ""} due to inactivity.
      </p>
      <div className="modal-action">
        <button className="btn btn-primary" onClick={handleTimeoutCancel}>
          I'm still here
        </button>
        <button className="btn btn-ghost" onClick={handleTimeout}>
          Back to home
        </button>
      </div>
    </Modal>
  );
};

export default TimeoutModal;

import { useIdle } from "@mantine/hooks";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import duckpay from "../../assets/duck-transparent-bg.png";
import { SessionActions } from "../redux/slices/sessionSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const TIMEOUT_SECONDS = 10;

const Home: React.FC = () => {
  const idle = useIdle(TIMEOUT_SECONDS * 1000, {
    events: ["click", "touchstart"],
    initialState: true
  });

  const [showHint, setShowHint] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!showHint && idle) {
      dispatch(SessionActions.triggerTimeout());
    }
  }, [dispatch, idle, showHint]);

  const isTimeout = useAppSelector((state) => state.session.isTimeout);
  useEffect(() => {
    if (isTimeout) {
      setShowHint(true);
      setShowButtons(false);
      dispatch(SessionActions.setTimeout(false));
    }
  }, [dispatch, isTimeout]);

  // const [animateGrowing, setAnimateGrowing] = useState(false);

  return (
    <div className="flex flex-col gap-y-16 justify-center items-center px-6 py-4 max-w-5xl mx-auto h-screen">
      <div className="mx-auto flex gap-x-8 items-center">
        <img className="h-64" src={duckpay} alt="DuckPay Logo" />
        <h2 className="font-semibold text-9xl tracking-wider">ATM</h2>
      </div>
      {showHint && (
        <div
          className={clsx(
            "w-full transition-all duration-500"
            // animateGrowing ? "h-[30vh]" : "h-20vh"
          )}
        >
          <button
            className="btn btn-lg h-40 btn-block rounded-full text-5xl tracking-wider"
            onClick={() => {
              // Let the idle listener update first
              // Also let animations play
              // setAnimateGrowing(true);
              setTimeout(() => {
                setShowHint(false);
                setShowButtons(true);
                // setAnimateGrowing(false);
              }, 200);
            }}
          >
            Click here to get started
          </button>
        </div>
      )}
      {showButtons && (
        <div className="flex gap-x-6 justify-center items-stretch h-[30vh] select-none">
          <button
            className={clsx(
              "btn btn-neutral w-96 h-[30vh]",
              "rounded-2xl",
              "font-semibold text-4xl",
              "tracking-wider"
            )}
          >
            Deposit
          </button>
          <button
            className={clsx(
              "btn btn-neutral w-96 h-[30vh]",
              "rounded-2xl",
              "font-semibold text-4xl",
              "tracking-wider"
            )}
          >
            Withdraw
          </button>
        </div>
      )}
    </div>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;

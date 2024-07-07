import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import duckpay from "../../assets/duck-transparent-bg.png";
import Page from "../components/common/Page";
import { RouteNames } from "../routes/routes";

const Done: React.FC = () => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((p) => p - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (timer === 0) {
      navigate(RouteNames.HOME);
    }
  });

  return (
    <Page>
      <img className="h-64" src={duckpay} alt="DuckPay Logo" />
      <h3 className="font-semibold tracking-wide text-3xl">
        Thank you for using DuckPay
      </h3>
      <p className="text-2xl font-medium">
        This page will automatically close in {timer} second
        {timer === 1 ? "" : "s"}
      </p>
    </Page>
  );
};

export const Component = Done;
Component.displayName = "Done";

export default Done;

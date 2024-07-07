import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import duckpay from "../../assets/duck-transparent-bg.png";
import Page from "../components/common/Page";
import { RouteNames } from "../routes/routes";

const spacer = <div className="h-14" />;

const Deposit: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <div className="text-3xl flex flex-col gap-y-8 items-center justify-between h-full">
        {spacer}
        <img className="h-64" src={duckpay} alt="DuckPay Logo" />
        <h3 className="font-semibold tracking-wide">
          Please enter cash below:
        </h3>
        <button
          className="btn btn-primary btn-block btn-lg text-3xl"
          onClick={() => navigate(RouteNames.CLAIM)}
        >
          Done
        </button>
        {spacer}
        <Icon
          className="animate-bounce text-9xl"
          icon="tabler:arrow-big-down-lines"
        />
      </div>
    </Page>
  );
};

export const Component = Deposit;
Component.displayName = "Deposit";

export default Deposit;

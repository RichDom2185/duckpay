import clsx from "clsx";
import React from "react";
import Menu from "../components/Menu";
import Card from "../components/common/Card";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="flex gap-x-6 justify-center items-stretch h-[30vh] select-none">
        <Card
          bodyClassName={clsx(
            "justify-center",
            "font-semibold text-4xl",
            "tracking-wider"
          )}
        >
          Deposit
        </Card>
        <Card
          bodyClassName={clsx(
            "justify-center",
            "font-semibold text-4xl",
            "tracking-wider"
          )}
        >
          Withdraw
        </Card>
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;

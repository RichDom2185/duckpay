import React from "react";
import Menu from "../components/Menu";
import TokenCard from "../components/TokenCard";
import { useAppSelector } from "../redux/store";

const Home: React.FC = () => {
  const tokens = useAppSelector((state) => state.session.tokens);
  return (
    <>
      <Menu />
      <div className="flex flex-wrap justify-center items-center m-4">
        {tokens?.map((token) => <TokenCard key={token.id} token={token} />)}
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;

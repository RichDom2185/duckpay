import React, { useEffect } from "react";
import Menu from "../components/Menu";
import TokenCard from "../components/TokenCard";
import { useAppSelector } from "../redux/store";
import SplitModal from "../components/modals/SplitModal";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { api } from "../api/api";
import { SessionActions } from "../redux/slices/sessionSlice";

const Home: React.FC = () => {
  const tokens = useAppSelector((state) => state.session.tokens);
  const dispatch = useDispatch();

  useEffect(() => {
    const accountId = Cookies.get("accountId");

    if (!accountId) {
      return;
    }

    api.tokens
      .getTokensUnderAccount(accountId)
      .then((tokens) => {
        dispatch(SessionActions.setTokens(tokens));
        dispatch(SessionActions.setAccountId(accountId));
      })
      .catch(() => {
        Cookies.remove("accountId");
      });
  }, [dispatch]);

  return (
    <>
      <Menu />
      <div className="flex flex-wrap justify-center items-center m-4">
        {tokens?.map((token) => <TokenCard key={token.id} token={token} />)}
      </div>
      <SplitModal />
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;

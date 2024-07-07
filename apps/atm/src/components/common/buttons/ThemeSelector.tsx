import { Icon } from "@iconify/react";
import React from "react";
import { SessionActions } from "../../../redux/slices/sessionSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const ThemeSelector: React.FC = () => {
  const theme = useAppSelector((state) => state.session.theme);
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn-lg btn-ghost text-2xl rounded-2xl mx-6 my-4 absolute right-0"
      onClick={() => {
        if (theme === "light") {
          dispatch(SessionActions.setTheme("dark"));
          return;
        }
        if (theme === "dark") {
          dispatch(SessionActions.setTheme("auto"));
          return;
        }
        if (theme === "auto") {
          dispatch(SessionActions.setTheme("light"));
          return;
        }
      }}
    >
      <Icon
        className="-ml-[0.125em]"
        inline
        icon={
          theme === "light"
            ? "tabler:sun"
            : theme === "dark"
              ? "tabler:moon"
              : "tabler:brightness-auto"
        }
      />
      <span>Theme: {capitalize(theme)}</span>
    </button>
  );
};

export default ThemeSelector;

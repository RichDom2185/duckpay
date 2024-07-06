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
    <ul className="menu menu-horizontal bg-base-200 rounded-box shadow-xl text-xl">
      <li>
        <a
          className="tooltip tooltip-bottom"
          data-tip={`Theme: ${capitalize(theme)}`}
        >
          <Icon
            icon={
              theme === "light"
                ? "tabler:sun"
                : theme === "dark"
                  ? "tabler:moon"
                  : "tabler:brightness-auto"
            }
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
          />
        </a>
      </li>
    </ul>
  );
};

export default ThemeSelector;

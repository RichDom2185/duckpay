import { useEffect } from "react";
import { useAppSelector } from "../redux/store";

export const useThemeLoader = () => {
  const theme = useAppSelector((state) => state.session.theme);
  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
    return () => {
      html?.removeAttribute("data-theme");
    };
  }, [theme]);
};

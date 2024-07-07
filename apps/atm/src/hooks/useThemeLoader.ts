import { useEffect } from "react";
import { useAppSelector } from "../redux/store";

export const useThemeLoader = () => {
  const theme = useAppSelector((state) => state.session.theme);
  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.add("transition-colors", "duration-500");
    html?.setAttribute("data-theme", theme);
    return () => {
      html?.classList.remove("transition-colors", "duration-500");
      html?.removeAttribute("data-theme");
    };
  }, [theme]);
};

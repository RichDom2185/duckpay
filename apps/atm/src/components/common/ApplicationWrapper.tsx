import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router";
import { useThemeLoader } from "../../hooks/useThemeLoader";
import TimeoutModal from "../../modals/TimeoutModal";
import Toast from "./Toast";
import BackButton from "./buttons/BackButton";
import ThemeSelector from "./buttons/ThemeSelector";

const ApplicationWrapper: React.FC = () => {
  useThemeLoader();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <BackButton />}
      <ThemeSelector />
      <Outlet />
      <Toaster>{(t) => <Toast toast={t} />}</Toaster>
      <TimeoutModal />
    </>
  );
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

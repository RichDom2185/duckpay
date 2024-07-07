import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import { useThemeLoader } from "../../hooks/useThemeLoader";
import TimeoutModal from "../../modals/TimeoutModal";
import Toast from "./Toast";

const ApplicationWrapper: React.FC = () => {
  useThemeLoader();

  return (
    <>
      <Outlet />
      <Toaster>{(t) => <Toast toast={t} />}</Toaster>
      <TimeoutModal />
    </>
  );
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

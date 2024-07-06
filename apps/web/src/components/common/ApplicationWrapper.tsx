import React from "react";
import { Outlet } from "react-router";
import { useThemeLoader } from "../../hooks/useThemeLoader";

const ApplicationWrapper: React.FC = () => {
  useThemeLoader();

  return <Outlet />;
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

import React from "react";
import { Outlet } from "react-router";
import Menu from "../Menu";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

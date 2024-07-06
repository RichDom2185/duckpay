import React from "react";
import { Outlet } from "react-router";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

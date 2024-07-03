import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export const Component = ApplicationWrapper;
Component.displayName = "ApplicationWrapper";

export default ApplicationWrapper;

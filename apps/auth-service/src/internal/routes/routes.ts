import express from "express";
import * as userRouter from "../../users/user.router";
import { AppDIContainer } from "../config/dependencies";

export const setupRoutes = (app: express.Application, deps: AppDIContainer) => {
  app.use("/users", userRouter.from(deps.userController));
};

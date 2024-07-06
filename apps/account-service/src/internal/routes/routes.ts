import express from "express";
import * as accountRouter from "../../account/account.router";
import { AppDIContainer } from "../config/dependencies";

export const setupRoutes = (app: express.Router, deps: AppDIContainer) => {
  app.use("/account", accountRouter.from(deps.accountController));
};

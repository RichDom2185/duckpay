import express from "express";
import * as accountRouter from "../../account/account.router";
import * as internalRouter from "../../private/internal.router";
import { AppDIContainer } from "../config/dependencies";

export const setupRoutes = (app: express.Application, deps: AppDIContainer) => {
  app.use("/account", accountRouter.from(deps.accountController));
  app.use("/internal", internalRouter.from(deps.internalController));
};

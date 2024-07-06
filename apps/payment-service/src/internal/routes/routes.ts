import express from "express";
import * as tokenRouter from "../../tokens/token.router";
import * as transactionRouter from "../../transaction/transaction.router";
import { AppDIContainer } from "../config/dependencies";

export const setupRoutes = (app: express.Application, deps: AppDIContainer) => {
  app.use("/tokens", tokenRouter.from(deps.tokenController));
  app.use("/transactions", transactionRouter.from(deps.transactionController));
};

import express from "express";
import * as tokenRouter from "../../tokens/token.router";
import { AppDIContainer } from "../config/dependencies";

export const setupRoutes = (app: express.Application, deps: AppDIContainer) => {
  app.use("/tokens", tokenRouter.from(deps.tokenController));
};

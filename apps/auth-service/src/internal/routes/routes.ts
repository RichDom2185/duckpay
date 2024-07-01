import express from "express";
import userRouter from "../../users/user.router";

export const setupRoutes = (app: express.Application) => {
  app.use("/users", userRouter);
};

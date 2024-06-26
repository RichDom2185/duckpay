import express from "express";
import userRouter from "../../users/userRouter";

export const setupRoutes = (app: express.Application) => {
  app.use("/users", userRouter);
};

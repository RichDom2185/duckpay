import express from "express";
import UserController from "./user.controller";

function from(controller: InstanceType<typeof UserController>) {
  const r = express.Router();
  r.get("/", controller.getHello);
  return r;
}

export { from };

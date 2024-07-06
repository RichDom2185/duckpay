import express from "express";
import TokenController from "./token.controller";

function from(controller: InstanceType<typeof TokenController>) {
  const r = express.Router();
  r.get("/", controller.getTokens);
  return r;
}

export { from };

import express from "express";
import TokenController from "./token.controller";

function from(controller: InstanceType<typeof TokenController>) {
  const r = express.Router();
  r.get("/", controller.getTokens);
  r.post("/consume", controller.registerTokenForUser);
  r.post("/merge", controller.merge);
  r.post("/:tokenId/split", controller.split);
  return r;
}

export { from };

import express from "express";
import InternalController from "./internal.controller";

function from(controller: InstanceType<typeof InternalController>) {
  const r = express.Router();
  r.post("/check-account-exists", controller.checkAccountExists);
  return r;
}

export { from };

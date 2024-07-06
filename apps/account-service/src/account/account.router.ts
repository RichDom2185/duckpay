import express from "express";
import AccountController from "./account.controller";

function from(controller: InstanceType<typeof AccountController>) {
  const r = express.Router();
  r.post("/create", controller.createAccount);
  r.delete("/:accountId/delete", controller.deleteAccount);
  return r;
}

export { from };

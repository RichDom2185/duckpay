import express from "express";
import TransactionController from "./transaction.controller";

function from(controller: InstanceType<typeof TransactionController>) {
  const r = express.Router();
  r.post("/deposit", controller.deposit);
  r.post("/withdraw", controller.withdraw);
  return r;
}

export { from };

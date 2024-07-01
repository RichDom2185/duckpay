import express from "express";
import usersController from "./user.controller";

const r = express.Router();

r.get("/", usersController.getHello);

export default r;

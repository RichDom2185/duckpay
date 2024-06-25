import express from "express";

const r = express.Router();

r.get("/", (req, res) => {
  res.send("Hello from users controller!");
});

export default r;

import { json } from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { LOG_FORMAT } from "./logging/logging";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan(LOG_FORMAT));

export default app;

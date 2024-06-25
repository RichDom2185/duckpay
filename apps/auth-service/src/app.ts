import { json } from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { LOG_FORMAT } from "./internal/logging/logging";
import { setupRoutes } from "./internal/routes/routes";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan(LOG_FORMAT));

setupRoutes(app);

export default app;

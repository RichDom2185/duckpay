import { json } from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { configureDI } from "./internal/config/dependencies";
import { LOG_FORMAT } from "./internal/logging/logging";
import { setupRoutes } from "./internal/routes/routes";

const API_BASE_PATH = "/accounts";
const app = express();

app.use(cors({ origin: "*" }));
app.use(json());
app.use(morgan(LOG_FORMAT));

const router = express.Router();
setupRoutes(router, configureDI());

app.use(API_BASE_PATH, router);

export default app;

import express from "express";
import Router from "./routes/index";
import "./models";
import expressMiddlewares from "./middlewares/expressMiddlewares";
import logger from "./Shared/lib/logger";

const app = express();
const PORT = process.env.PORT;

expressMiddlewares(app);
app.use("", Router);

app.listen(PORT, () => logger.info(`Nodejs Running on Port ${PORT}`));

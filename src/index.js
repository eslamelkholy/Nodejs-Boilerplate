import express from "express";
import Router from "./routes/index";
import "./models";
import expressMiddlewares from "./middlewares/expressMiddlewares";
import handleError from "./Shared/lib/error";
import logger from "./Shared/lib/logger";

const app = express();
const PORT = process.env.PORT || 6666;

expressMiddlewares(app);
app.use("", Router);
app.use((err, req, res, next) => handleError(err, res));

app.listen(PORT, () => logger.info(`Nodejs Running on Port ${PORT}`));
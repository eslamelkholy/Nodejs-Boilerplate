import express from "express";
import Router from "./routes/index";
import "./models";
import expressMiddlewares from "./middlewares/expressMiddlewares";
import logger from "./Shared/lib/logger";
import { handleError } from "./Shared/lib/error";
import { PAGE_NOT_FOUND, STARTING_MSG } from "./Shared/Constants";

const app = express();
const PORT = process.env.PORT;

expressMiddlewares(app);
app.use("", Router);

app.use((req, res) => {
  logger.error(req.method, req.originalUrl, PAGE_NOT_FOUND);
  return handleError({ statusCode: 404, message: PAGE_NOT_FOUND }, res);
});

app.use((err, req, res, next) => {
  logger.error(err);
  handleError(err, res);
});

app.listen(PORT, () => logger.info(`${STARTING_MSG} ${PORT}`));

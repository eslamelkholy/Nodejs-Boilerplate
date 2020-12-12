import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import expressRequestId from "express-request-id";
import requestLogger from "../Shared/lib/requestLogger";

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.set("x-powered-by", false);
  app.use(expressRequestId());
  app.use(requestLogger);
};

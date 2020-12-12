import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export default (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
};

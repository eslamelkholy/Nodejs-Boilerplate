import express from "express";
import courses from "./courses";
import { ErrorHandler } from "../Shared/lib/error";
const app = express();

app.get("/error", (req, res) => {
  throw new ErrorHandler(500, "Internal server error");
});

app.get("404", (req, res, next) => {
  return next();
});

app.use("/courses", courses);

app.get("/", (req, res) =>
  res.json({
    message1: "Changes in Code in Development Now Reflects in Docker",
  })
);

export default app;

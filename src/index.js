import express from "express";
import Router from "./routes/index";
import "./models";

const app = express();

app.use("", Router);

app.listen(3000, function () {
  console.log("running on port 3000 ");
});

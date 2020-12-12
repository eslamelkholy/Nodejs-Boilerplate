import express from "express";
import courses from "./courses";

const app = express();

app.use("/courses", courses);

export default app;

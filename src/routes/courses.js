import express from "express";
import courses from "../controller/courses";
const coursesRouter = express.Router();

coursesRouter.get("/", courses.get);

export default coursesRouter;

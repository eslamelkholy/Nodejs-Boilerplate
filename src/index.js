import express from "express";
import Router from "./routes/index";
import "./models";
import expressMiddlewares from "./middlewares/expressMiddlewares";

const app = express();
const PORT = process.env.PORT;

expressMiddlewares(app);
app.use("", Router);

app.listen(PORT, () => console.log(`Nodejs Running on Port ${PORT}`));

import express from "express";
import path from "path";
import "./db";
import { localsMiddleware } from "./middlewares";
import movieRouter from "./movieRouter";

const app = express();
const PORT = 4000;
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () =>
  console.log(
    `✅  Server Ready! Example app listening at http://localhost:${PORT}`
  )
);

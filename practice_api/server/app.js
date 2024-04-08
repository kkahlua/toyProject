import express from "express";
import halMiddleware from "./middlewares/hal.js";
import articleRouter from "./routers/article.js";
import userRouter from "./routers/user.js";
import authRouter from "./routers/auth.js";

import morgan from "morgan";

const app = express();

app.use(morgan());
app.use(express.json());
app.use(halMiddleware);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use("/articles", articleRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(3000);

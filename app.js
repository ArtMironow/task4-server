require("dotenv").config();
const express = require("express");

const cors = require("cors");

const app = express();
const userRouter = require("./api/users/user.router");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Start on port: ", process.env.APP_PORT);
});

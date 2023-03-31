require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");

const cors = require("cors");

const file = fs.readFileSync("./34161ED54DE061D74A08AF604B21F292.txt");

//const key = fs.readFileSync("private.key")
//const cert = fs.readFileSync("certificate.crt")

const app = express();
const userRouter = require("./api/users/user.router");

var corsOptions = {
  origin: "http://localhost:8081",
};

//const cred = {
//  key,
//  cert
//}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Start on port: ", process.env.APP_PORT);
});

app.get(
  "/.well-known/pki-validation/34161ED54DE061D74A08AF604B21F292.txt",
  (req, res) => {
    res.sendFile("/task4-server/34161ED54DE061D74A08AF604B21F292.txt");
  }
);

// const httpsServer = https.createServer(cred, app)
// httpsServer.listen(443)

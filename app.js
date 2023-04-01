require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");

const cors = require("cors");

// const file = fs.readFileSync(
//   "/home/ubuntu/task4-server/2E241B0E1E489A3BE53BDC749CD3D57C.txt"
// );

const key = fs.readFileSync("/home/ubuntu/task4-server/private.key");
const cert = fs.readFileSync("/home/ubuntu/task4-server/certificate.crt");

const app = express();
const userRouter = require("./api/users/user.router");

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

const cred = {
  key,
  cert,
};

//app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());
app.use("/api/auth", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Start on port: ", process.env.APP_PORT);
});

// app.get(
//   "/.well-known/pki-validation/2E241B0E1E489A3BE53BDC749CD3D57C.txt",
//   (req, res) => {
//     res.sendFile(
//       "/home/ubuntu/task4-server/2E241B0E1E489A3BE53BDC749CD3D57C.txt"
//     );
//   }
// );

// const httpsServer = https.createServer(cred, app)
// httpsServer.listen(443)

// require("dotenv").config();
// const express = require("express");
// const fs = require("fs");
// const https = require("https");

// const cors = require("cors");

// const file = fs.readFileSync("/home/ubuntu/task4-server/8CCA187226D56EDC68B604B2ACE60E14.txt");

// //const key = fs.readFileSync("private.key")
// //const cert = fs.readFileSync("certificate.crt")

// const app = express();
// //const userRouter = require("./api/users/user.router");

// // var corsOptions = {
// //   origin: "http://localhost:8081",
// // };

// //const cred = {
// //  key,
// //  cert
// //}

// //app.use(cors(corsOptions));
// app.use(cors());
// //app.use(express.json());
// //app.use("/api/auth", userRouter);

// app.listen(process.env.APP_PORT, () => {
//   console.log("Start on port: ", process.env.APP_PORT);
// });

// app.get("/api", (req, res) => {
//   res.send({
//     people: "444asdasd"
//   })
// })

// app.get(
//   "/.well-known/pki-validation/8CCA187226D56EDC68B604B2ACE60E14.txt",
//   (req, res) => {
//     res.sendFile("/home/ubuntu/task4-server/8CCA187226D56EDC68B604B2ACE60E14.txt");
//   }
// );

app.get("*", function (req, res) {
  res.redirect("http://" + req.headers.host + req.url);
});

app.listen(80);

const httpsServer = https.createServer(cred, app);
httpsServer.listen(443);

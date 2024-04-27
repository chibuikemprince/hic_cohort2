const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const LoginVerification = require("./middlewares/loginverification");

const app = express();

const port = process.env.PORT;

app.use(function (req, res, next) {
  console.log("Request Received Successfully from ", req.path, req.query);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.post(
  "/login",
  LoginVerification.isEmailPassed,
  LoginVerification.passwordPassed
);

app.use(function (req, res, next) {
  res.status(404).json({
    message: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});

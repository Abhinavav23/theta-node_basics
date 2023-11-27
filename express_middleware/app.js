const express = require("express");
const app = express();
const { genericMiddleware, checkLoginStatus } = require("./midlewares");

// it is a way to define a middleware that needs to be used
// app.use(genericMiddleware);

app.get("/home", (req, res) => {
  console.log("inside home");
  res.send("home page");
});

// app.use(checkLoginStatus);

// app.use(genericMiddleware);
app.get("/profile", genericMiddleware, checkLoginStatus, (req, res) => {
  console.log("inside profile handler");
  const user = {
    name: "abhinav",
    role: "Instructor",
  };
  res.json(user);
});

app.get("/orders", (req, res) => {
  console.log("order handler");
  res.json("my orders");
});

module.exports = { app };

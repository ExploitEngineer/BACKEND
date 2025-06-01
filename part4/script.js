// Express.js Framework:

// Introduction to Express.js
// express js ek npm package hai
// framework
// manages everthing from receiving the request and giving back the response

// Setting up a basic Express application.
// Routing.
// Middleware.
// Request and response handling.
// Error handling.

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("start middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("start middleware one more time");
  next();
});

// creating routes
app.get("/", function (req, res) {
  res.send("You are Champion");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/profile", function (req, res, next) {
  res.send("done");
  return next(new Error("something went wronge"));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);

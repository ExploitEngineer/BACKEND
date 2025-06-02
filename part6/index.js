const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  const {
    params: { username },
  } = req;
  res.send(`Welcome, ${username}`);
});

app.get("/auther/:username/:age", function (req, res) {
  const {
    params: { username, age },
  } = req;
  res.send(`Your name is, ${username} & your age is ${age}`);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

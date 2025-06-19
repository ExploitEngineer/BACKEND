const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const userModel = require("./models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (_, res) {
  res.render("index");
});

app.post("/create", function (req, res) {
  let {
    body: { username, email, password },
  } = req;
  bcrypt.genSalt(10, (_, salt) => {
    bcrypt.hash(password, salt, async (_, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        hash,
        age,
      });

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/login", function (_, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  const {
    body: { email, password },
  } = req;
  let user = await userModel.findOne({ email });
  if (!user) return res.send("something went wronge");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: user.email }, "secret");
      res.cookie("token", token);
      res.send("Yes you can login");
    } else res.send("something went wronge");
  });
});

app.get("/logout", function (_, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

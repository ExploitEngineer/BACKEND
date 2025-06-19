const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

app.get("/", function (_, res) {
  bcrypt.genSalt(10, function (_, salt) {
    bcrypt.hash("mynewpassword", salt, function (_, hash) {
      console.log(hash);
    });
  });
  let token = jwt.sign({ email: "harsh@example.com" }, "secret");
  console.log(token);
  res.cookie("token", token);
  res.send("Encrypt Password");
});

app.get("/compare", function (_, res) {
  bcrypt.compare(
    "mynewpassword",
    "$2b$10$luBmLD48DqRPC/fvxmHvluQ2urE1fOJ1BsQ68Sgg8KWjihfmtd0am",
    function (_, result) {
      console.log(result);
    },
  );
  res.send("Compare Password");
});

app.get("/read", function (req, res) {
  const {
    cookies: { token },
  } = req;
  console.log(token);
  let data = jwt.verify(token, "secret");
  console.log(data);
  res.send("read page");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

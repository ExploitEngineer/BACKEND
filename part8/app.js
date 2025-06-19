const express = require("express");
const userModel = require("./usermodel.js");

const app = express();

app.get("/", function (_, res) {
  res.send({ msg: "hello" });
});

app.get("/create", async function (_, res) {
  let createdUser = await userModel.create({
    name: "rafay",
    username: "Rafay",
    email: "rafay@gmail.com",
  });
  res.send(createdUser);
});

app.get("/update", async function (_, res) {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "Harsh" },
    { name: "rafay" },
    { new: true },
  );
  res.send(updatedUser);
});

app.get("/read", async function (_, res) {
  let users = await userModel.find();
  res.send(users);
});

app.get("/delete", async function (_, res) {
  let users = await userModel.findOneAndDelete({ username: "Harsh" });
  res.send(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Sever is running on port ${PORT}`);
});

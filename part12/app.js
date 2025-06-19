const express = require("express");
const userModel = require("./models/user.model.js");
const postModel = require("./models/post.model.js");

const app = express();

app.get("/", function (_, res) {
  res.send("hello");
});

app.get("/create", async function (_, res) {
  let user = await userModel.create({
    username: "harsh",
    age: 25,
    email: "harsh@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async function (_, res) {
  let post = await postModel.create({
    postdata: "Hello how are you all",
    user: "685467eac6c3dbb562a33f4f",
  });
  let user = await userModel.findOne({ _id: "685467eac6c3dbb562a33f4f" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

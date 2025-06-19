const express = require("express");
const path = require("path");
const userModel = require("./models/user.model.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.render("index");
});

app.get("/read", async function (_, res) {
  let users = await userModel.find();
  res.render("read", { users });
});

app.post("/create", async function (req, res) {
  const {
    body: { name, email, image },
  } = req;
  await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("/read");
});

app.get("/edit/:userid", async function (req, res) {
  const {
    params: { userid },
  } = req;
  let user = await userModel.findOne({ _id: userid });
  res.render("edit", { user });
});

app.post("/update/:userid", async function (req, res) {
  const {
    params: { userid },
    body: { name, email, image },
  } = req;
  await userModel.findOneAndUpdate(
    { _id: userid },
    { image, name, email },
    { new: true },
  );
  res.redirect("/read");
});

app.get("/delete/:id", async function (req, res) {
  const {
    params: { id },
  } = req;
  await userModel.findOneAndDelete({ _id: id });
  res.redirect("/read");
});

app.listen(3000, function () {
  console.log(`Server is running on port 3000`);
});

const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.model.js");
const postModel = require("./models/post.model.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  const {
    body: { username, name, age, email, password },
  } = req;

  try {
    let user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User already registered");
    bcrypt.genSalt(10, (_, salt) => {
      bcrypt.hash(password, salt, async (_, hash) => {
        let user = await userModel.create({
          username,
          email,
          age,
          name,
          password: hash,
        });
        let token = jwt.sign({ email, userid: user._id }, "secret");
        res.cookie("token", token);
        res.send("registered");
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const {
    body: { email, password },
  } = req;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (_, result) => {
    if (result) {
      let token = jwt.sign({ email, userid: user._id }, "secret");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

app.get("/logout", (_, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  const {
    user: { email },
  } = req;
  let user = await userModel.findOne({ email }).populate("posts");
  res.render("profile", { user });
});

function isLoggedIn(req, res, next) {
  const {
    cookies: { token },
  } = req;
  if (token === "") return res.redirect("/login");
  else {
    let data = jwt.verify(token, "secret");
    req.user = data;
  }
  next();
}

app.post("/post", isLoggedIn, async (req, res) => {
  const { email } = req.user;
  const { content } = req.body;

  try {
    const user = await userModel.findOne({ email });
    const post = await postModel.create({ user: user._id, content });
    user.posts.push(post._id);
    await user.save();

    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to create post");
  }
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  const {
    params: { id },
    user: { userid },
  } = req;
  let post = await postModel.findOne({ _id: id }).populate("user");
  if (post.likes.indexOf(userid) === -1) {
    post.likes.push(userid);
  } else {
    post.likes.splice(post.likes.indexOf(userid), 1);
  }
  await post.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  const {
    params: { id },
  } = req;
  let post = await postModel.findOne({ _id: id }).populate("user");
  res.render("edit", { post });
});

app.post("/update/:id", async (req, res) => {
  const {
    params: { id },
    body: { content },
  } = req;
  await postModel.findOneAndUpdate({ _id: id }, { content });
  res.redirect("/profile");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

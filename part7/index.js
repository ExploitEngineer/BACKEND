const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (_, res) {
  fs.readdir(`./files`, function (_, files) {
    return res.render("index", { files });
  });
});

app.get("/file/:filename", function (req, res) {
  const {
    params: { filename },
  } = req;
  fs.readFile(`./files/${filename}`, "utf-8", function (_, filedata) {
    res.render("show", { filename, filedata });
  });
});

app.get("/edit/:filename", function (req, res) {
  const {
    params: { filename },
  } = req;
  res.render("edit", { filename });
});

app.post("/edit", function (req, res) {
  const {
    body: { previous, newname },
  } = req;
  fs.rename(`./files/${previous}`, `./files/${newname}`, function () {
    res.redirect("/");
  });
});

app.post("/create", function (req, res) {
  const {
    body: { title, details },
  } = req;
  fs.writeFile(
    `./files/${title.split(" ").join("")}.txt`,
    details,
    function (_) {
      res.redirect("/");
    },
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

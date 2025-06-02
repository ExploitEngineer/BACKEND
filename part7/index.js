const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});

app.post("/create", function (req, res) {
  const {
    body: { title, details },
  } = req;
  fs.writeFile(
    `./files/${title.split(" ").join("")}.txt`,
    details,
    function (err) {
      res.redirect("/");
    }
  );
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/mongoose.connection.js");
const usersRouter = require("./routes/users.router.js");
const procutsRouter = require("./routes/products.router.js");
const ownersRouter = require("./routes/owners.router.js");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/users", usersRouter);
app.use("/products", procutsRouter);
app.use("/owners", ownersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});

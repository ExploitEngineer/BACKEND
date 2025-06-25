const mongoose = require("mongoose");
const userSchema = require("../schemas/user.schema.js");

module.exports = mongoose.model("user", userSchema);

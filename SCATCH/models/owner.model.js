const mongoose = require("mongoose");
const ownerSchema = require("../schemas/owners.schema.js");

module.exports = mongoose.model("owner", ownerSchema);

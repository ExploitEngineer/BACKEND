const mongoose = require("mongoose");
const productSchema = require("../schemas/product.schema.js");

module.exports = mongoose.model("product", productSchema);

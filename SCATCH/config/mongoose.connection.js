const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/scatch";
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(`MongoDB Connection error:`, err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

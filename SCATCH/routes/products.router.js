const express = require("express");

const router = express.Router();

router.get("/", function(_, res) {
  res.send("hey it's working");
});

module.exports = router;

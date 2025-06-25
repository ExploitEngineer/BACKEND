const express = require("express");
const ownerModel = require("../models/owner.model.js");

const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function(_, res) {
    let { body: { fullname, email, password } } = req;
    let owners = await ownerModel.find();
    if (owners.length > 0) return res.status(503).send("You don't have premission to create a new owner");
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdOwner);
  })
}

router.get("/", function(_, res) {
  res.send("hey it's working");
});

module.exports = router;

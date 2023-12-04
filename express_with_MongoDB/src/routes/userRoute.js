const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("body", req.body);
  res.json({ msg: "created" });
});

module.exports = router;

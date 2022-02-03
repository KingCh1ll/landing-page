const parser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use("/", (req, res) => res.redirect("https://twitter.com/KingCh1ll"));

module.exports = router;

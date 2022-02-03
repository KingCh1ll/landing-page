const parser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use("/", (req, res) => res.redirect("https://github.com/KingCh1ll"));

module.exports = router;

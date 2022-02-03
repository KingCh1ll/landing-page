const parser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use("/twitter", require("./twitter"));
router.use("/github", require("./github"));
router.use("/discord", require("./discord"));

module.exports = router;

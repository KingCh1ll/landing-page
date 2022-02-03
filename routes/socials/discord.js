const parser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use("/", (req, res) => res.redirect("https://discord.com/users/571811686617710592"));

module.exports = router;

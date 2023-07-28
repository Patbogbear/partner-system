const express = require("express");
const router = express.Router();
const passport = require("passport")

const Parties = require("../../model/Logs")


router.get("/test", (req, res) => {
    res.json({ msg: "logs works" })
})

module.exports = router;
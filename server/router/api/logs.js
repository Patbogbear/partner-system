const express = require("express");
const router = express.Router();
const passport = require("passport")

const Logs = require("../../model/Logs")


router.get("/test", (req, res) => {
    res.json({ msg: "logs works" })
})

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Logs.find()
    .populate({
        path: 'userId',
        select: 'name' // 仅选择 'name' 字段
    })
    .then((logs) => {
        if (!logs) {
            return res.status(400).json({ message: "no content" });
        }
        res.json(logs);
    })
    .catch(error => res.status(404).json({ error: "server error, could not fetch log list", message: "could not fetch log list" }));
});
module.exports = router;
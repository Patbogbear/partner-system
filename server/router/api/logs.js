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

        // 转换和格式化时间字段
        const formattedLogs = logs.map(log => {
            const logObject = log.toObject();
            logObject.date = convertToBeijingTime(logObject.date);
            return logObject;
        });

        res.json(formattedLogs);
    })
    .catch(error => res.status(404).json({ error: "server error, could not fetch log list", message: "could not fetch log list" }));
});

function convertToBeijingTime(date) {
    const beijingTime = new Date(date.getTime() + 8 * 60 * 60 * 1000);

    const year = beijingTime.getFullYear();
    const month = beijingTime.getMonth() + 1;
    const day = beijingTime.getDate();
    let hours = beijingTime.getHours();
    const minutes = beijingTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0'+minutes : minutes;

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${ampm} ${hours}:${minutesStr}`;
}

module.exports = router;
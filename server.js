const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const passport = require("passport")
const path = require("path")

const users = require("./server/router/api/users");
const partners = require("./server/router/api/partners")
const logs = require("./server/router/api/logs");
const accessRequests = require("./server/router/api/accessRequests");

//excel 
// const XLSX = require('xlsx')

// const collectionName = 'parties'
// const fields = {
//     '服务商类型': 'thrid_partner_type',
//     '服务商名称': 'thrid_partner_name',
//     '2B/2C': 'b2b_or_b2c',   
// }

// const desktopPath = path.join(require('os').homedir(), 'Desktop');
// const filePath = path.join(desktopPath, '222.xlsx')
// const workbook = XLSX.readFile(filePath)
// const worksheet = workbook.Sheets['Sheet1'];
// const eData = XLSX.utils.sheet_to_json(worksheet)

// //console.log(eData)


// const formattedData = eData.map(item => {
//     const formattedItem = {};
//     Object.keys(item).forEach(key => {
//         formattedItem[fields[key]] = item[key];
//     })

//     return formattedItem;
// })

// console.log(formattedData)

//excel end

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// DB config
const db = require("./config/keys").mongoURI;
//connect to mongodb



mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("successful connected")
    }

    )
    .catch(err => console.log(err))

app.use(passport.initialize())

require("./config/passport")(passport)

// app.get("/", (req, res) => {
//     res.send("hello World!")
// })

// use router
app.use("/api/users", users);
app.use("/api/partners", partners);
app.use("/api/logs",logs);
app.use("/api/accessQuests",accessRequests);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    })
}


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port `);
})
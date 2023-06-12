const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const passport = require("passport")
const path = require("path")

const users = require("./server/router/api/users");
const parties = require("./server/router/api/parties")

//excel 
// const XLSX = require('xlsx')

// const collectionName = 'parties'
// const fields = {
//     thrid_party_type: '服务商类型',
//     thrid_party_name: '服务商名称',
//     b2b_or_b2c: '2B/2C',
//     party_location: '公司所在地',
//     party_scope: '服务覆盖范围',
//     introduce: '公司介绍',
//     service_introduce: '服务介绍',
//     advantage_features_introduce: '优势和特色介绍',
//     major_cliens_or_case: '主要客户/成功案例',
//     website: '网址',
//     tier: 'A1/A2/B1/B2',
//     first_time_cooperate: '是否第一次合作',
//     marketing_data: '市场活动数据',
//     transfer_data: '转介绍数据',
//     channel_categroy_activate_data: '渠道类别活动数据',
//     coorprate_score: '合作评分',
//     POC_HZ: 'POC-HZ',
//     POC_SH: 'POC-SH',
//     HZ_tracking_process: 'HZ跟进情况',
//     SH_tracking_process: 'SH跟进情况',
//     demonds: '需求'

// }

// const desktopPath = path.join(require('os').homedir(), 'Desktop');
// const filePath = path.join(desktopPath, '222.xlsx')
// const workbook = XLSX.readFile(filePath)
// const worksheet = workbook.Sheets['Sheet1'];
// const eData = XLSX.utils.sheet_to_json(worksheet)

// console.log(eData)


// const formattedData = eData.map(item => {
//     const formattedItem = {};
//     Object.keys(item).forEach(key => {
//         formattedItem[fields[key]] = item[key];
//     })

//     return formattedItem;
// })

// console.log(formattedData)

// excel end

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// DB config
const db = require("./config/keys").mongoURI;
//connect to mongodb
//test


mongoose.connect(db,{useNewUrlParser:true})
    .then(() =>{
        console.log("successful connected")
        //return parties.insertMany(formattedData)
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
app.use("/api/parties", parties);

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
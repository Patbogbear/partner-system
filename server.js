const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const passport = require("passport")
const path = require("path")

const users = require("./server/router/api/users");
const parties = require("./server/router/api/parties")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



// DB config
const db = require("./config/keys").mongoURI;
//connect to mongodb
mongoose.connect(db)
        .then(() => console.log("successful connected"))
        .catch(err => console.log(err))

app.use(passport.initialize())

require("./config/passport")(passport)

app.get("/",(req,res) => {
    res.send("hello World!")
})

// use router
app.use("/api/users",users);
app.use("/api/parties",parties);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
    })
}


const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`Server is running on port `);
})
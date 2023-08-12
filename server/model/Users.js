const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    cluster:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    identity:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = User = mongoose.model("users",UserSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    action: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Log = mongoose.model("logs", LogSchema)
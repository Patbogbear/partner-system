const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessRequestSchema = new Schema({
    requestedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    partnerId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'partners'
    },
    requestedContactField: {
        type: String,
        enum: ['sh_contact', 'hz_contact', 'bj_contact'],
        required: true
    },
    status:{
        type:String,
        enum:['PENDING','APPROVED','DENIED'],
        default:'PENDING'
    },
    
})

module.exports = AccessRequest = mongoose.model("AccessRequests", AccessRequestSchema)
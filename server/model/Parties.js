const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    date:{
        type:Date,
        default:Date.now
    },
    thrid_party_type: {
        type:String,
        required:true
    },
    thrid_party_name: {
        type:String,
        required:true
    },
    b2b_or_b2c: {
        type:String,
    },
    party_location: {
        type:String,
    },
    party_scope: {
        type:String,
    },
    introduce: {
        type:String,
    },
    major_cliens_or_case: {
        type:String,
    },
    website: {
        type:String,
    },
    tier:{
        type:String,
    },
    first_time_cooperate: {
        type:String,
    },
    channel_contact:{
        type:String,
    },
    channel_contact_position:{
        type:String,
    },
    channel_contact_information:{
        type:String,
    },
    marketing_data:{
        type:String,
    },
    transfer_data:{
        type:String,
    },
    channel_categroy_activate_data:{
        type:String,
    },
    coorprate_score: {
        type:String,
    },
    POC_HZ:{
        type:String,
    },
    POC_SH:{
        type:String,
    },
    POC_BJ:{
        type:String,
    },
    HZ_vertical:{
        type:String,
    },
    HZ_tracking_process:{
        type:String,
    },
    HZ_tracking_process_segment:{
        type:String,
    },
    HZ_channel_source:{
        type:String,
    },
    SH_vertical:{
        type:String,
    },
    SH_tracking_process:{
        type:String,
    },
    SH_tracking_process_segment:{
        type:String,
    },
    SH_channel_source:{
        type:String,
    }
})

module.exports = Party = mongoose.model("parties",PartySchema)
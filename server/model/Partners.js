const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProtectedContactSchema = new Schema({
    channel_contact: {
        type: String
    },
    channel_contact_position: {
        type: String
    },
    channel_contact_information: {
        type: String
    }
});

const PartnerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    cluster: {
        type: String,
        required: true
    },
    third_partner_type: {
        type: String,
        required: true
    },
    third_partner_name: {
        type: String,
        required: true
    },
    b2b_or_b2c: {
        type: String
    },
    partner_location: {
        type: String
    },
    partner_scope: {
        type: String
    },
    introduce: {
        type: String
    },
    coverage_province:{
        type: String
    },
    major_clients_or_case: {
        type: String
    },
    website: {
        type: String
    },
    sh_tier: {
        type: String
    },
    hz_tier: {
        type: String
    },
    bj_tier: {
        type: String
    },
    sh_contact: {
        type: ProtectedContactSchema
    },
    hz_contact: {
        type: ProtectedContactSchema
    },
    bj_contact: {
        type: ProtectedContactSchema
    },
    vertical: {
        type: String
    },
    POC_HZ: {
        type: String
    },
    POC_SH: {
        type: String
    },
    POC_BJ: {
        type: String
    },
    HZ_tracking_process: {
        type: String
    },
    HZ_tracking_process_segment: {
        type: String
    },
    SH_tracking_process: {
        type: String
    },
    SH_tracking_process_segment: {
        type: String
    },
    BJ_tracking_process: {
        type: String
    },
    BJ_tracking_process_segment: {
        type: String
    },
    hz_marketing_data: {
        type: String
    },
    sh_marketing_data: {
        type: String
    },
    bj_marketing_data: {
        type: String
    },
    hz_transfer_data: {
        type: String
    },
    sh_transfer_data: {
        type: String
    },
    bj_transfer_data: {
        type: String
    }
});

module.exports = Partner = mongoose.model("partners",PartnerSchema)
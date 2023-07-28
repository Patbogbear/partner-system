const express = require("express");
const router = express.Router();
const passport = require("passport")

const Parties = require("../../model/Parties")
const Log = require("../../model/Logs")

// $route get api/parties/test
// @desc return require json data 
// @ access public

// router.get("/test", (req, res) => {
//     res.json({ msg: "party works" })
// })


// $route get api/parties/add
// @desc return require json data 
// @ access private

router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const parties = {};

    if (req.body.thrid_party_type) parties.thrid_party_type = req.body.thrid_party_type;
    if (req.body.thrid_party_name) parties.thrid_party_name = req.body.thrid_party_name;
    if (req.body.b2b_or_b2c) parties.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.party_location) parties.party_location = req.body.party_location;
    if (req.body.party_scope) parties.party_scope = req.body.party_scope;
    if (req.body.introduce) parties.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) parties.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) parties.website = req.body.website;
    if (req.body.tier) parties.tier = req.body.tier;
    if (req.body.first_time_cooperate) parties.first_time_cooperate = req.body.first_time_cooperate;
    if (req.body.channel_contact) parties.channel_contact = req.body.channel_contact;
    if (req.body.channel_contact_position) parties.channel_contact_position = req.body.channel_contact_position;
    if (req.body.channel_contact_information) parties.channel_contact_information = req.body.channel_contact_information;
    if (req.body.marketing_data) parties.marketing_data = req.body.marketing_data;
    if (req.body.transfer_data) parties.transfer_data = req.body.transfer_data;
    if (req.body.channel_categroy_activate_data) parties.channel_categroy_activate_data = req.body.channel_categroy_activate_data;
    if (req.body.coorprate_score) parties.coorprate_score = req.body.coorprate_score;
    if (req.body.POC_HZ) parties.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) parties.POC_SH = req.body.POC_SH;
    if (req.body.POC_BJ) parties.POC_BJ = req.body.POC_BJ;
    if (req.body.HZ_vertical) parties.HZ_vertical = req.body.HZ_vertical;
    if (req.body.HZ_tracking_process) parties.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.HZ_tracking_process_segment) parties.HZ_tracking_process_segment = req.body.HZ_tracking_process_segment;
    if (req.body.HZ_channel_source) parties.HZ_channel_source = req.body.HZ_channel_source;
    if (req.body.SH_vertical) parties.SH_vertical = req.body.SH_vertical;
    if (req.body.SH_tracking_process) parties.SH_tracking_process = req.body.SH_tracking_process;
    if (req.body.SH_tracking_process_segment) parties.SH_tracking_process_segment = req.body.SH_tracking_process_segment;
    if (req.body.SH_channel_source) parties.SH_channel_source = req.body.SH_channel_source;
    if (req.body.demonds) parties.demonds = req.body.demonds;

    new Parties(parties).save().then((parties) => {
        res.json(parties)
    })

})


// $route get api/parties/
// @desc return require json data 
// @ access private

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Parties.find().then((parties) => {
        if (!parties) {
            return res.status(404).json("no content")
        }
        res.json(parties)
    })
        .catch(err => res.status(404).json(err));
})

// $route get api/parties/export
// @desc return require json data
// @ access private 

router.get("/export", passport.authenticate("jwt", { session: false }), (req, res) => {
    Parties.find().then((parties) => {
        if (!parties || parties.length === 0) {
            return res.status(404).json("no content")
        }
        res.json(parties)
        const userId = req.user.id
        const newLog = new Log({
            userId,
            action: 'export partners',
            description: `user ${req.user.email} export partners data `
        });
        newLog.save()
    })
        .catch(err => res.status(404).json(err));

})

// $route get api/parties/:id
// @desc return require json data 
// @ access private

router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    Parties.findOne({ _id: req.params.id }).then((parties) => {
        if (!parties) {
            return res.status(404).json("no content")
        }
        res.json(parties)

    })
        .catch(err => res.status(404).json(err));
})

// $route get api/parties/edit
// @desc return require json data 
// @ access private

router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const parties = {};

    if (req.body.thrid_party_type) parties.thrid_party_type = req.body.thrid_party_type;
    if (req.body.thrid_party_name) parties.thrid_party_name = req.body.thrid_party_name;
    if (req.body.b2b_or_b2c) parties.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.party_location) parties.party_location = req.body.party_location;
    if (req.body.party_scope) parties.party_scope = req.body.party_scope;
    if (req.body.introduce) parties.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) parties.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) parties.website = req.body.website;
    if (req.body.tier) parties.tier = req.body.tier;
    if (req.body.first_time_cooperate) parties.first_time_cooperate = req.body.first_time_cooperate;
    if (req.body.channel_contact) parties.channel_contact = req.body.channel_contact;
    if (req.body.channel_contact_position) parties.channel_contact_position = req.body.channel_contact_position;
    if (req.body.channel_contact_information) parties.channel_contact_information = req.body.channel_contact_information;
    if (req.body.marketing_data) parties.marketing_data = req.body.marketing_data;
    if (req.body.transfer_data) parties.transfer_data = req.body.transfer_data;
    if (req.body.channel_categroy_activate_data) parties.channel_categroy_activate_data = req.body.channel_categroy_activate_data;
    if (req.body.coorprate_score) parties.coorprate_score = req.body.coorprate_score;
    if (req.body.POC_HZ) parties.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) parties.POC_SH = req.body.POC_SH;
    if (req.body.POC_BJ) parties.POC_BJ = req.body.POC_BJ;
    if (req.body.HZ_vertical) parties.HZ_vertical = req.body.HZ_vertical;
    if (req.body.HZ_tracking_process) parties.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.HZ_tracking_process_segment) parties.HZ_tracking_process_segment = req.body.HZ_tracking_process_segment;
    if (req.body.HZ_channel_source) parties.HZ_channel_source = req.body.HZ_channel_source;
    if (req.body.SH_vertical) parties.SH_vertical = req.body.SH_vertical;
    if (req.body.SH_tracking_process) parties.SH_tracking_process = req.body.SH_tracking_process;
    if (req.body.SH_tracking_process_segment) parties.SH_tracking_process_segment = req.body.SH_tracking_process_segment;
    if (req.body.SH_channel_source) parties.SH_channel_source = req.body.SH_channel_source;
    if (req.body.demonds) parties.demonds = req.body.demonds;

    Parties.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: parties },
        { new: true }
    ).then(parties => res.json(parties))

})


// $route delete api/parties/:id
// @desc return require json data 
// @ access private  

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Parties.findOneAndRemove({ _id: req.params.id })
            .then(partner => {
                if (!partner) {
                    return res.status(404).json("Partner not found")
                }
                const userId = req.user.id;
                const newLog = new Log({
                    userId,
                    action: 'delete partner',
                    description: `user ${req.user.email} delete partner name:${partner.thrid_party_name} partner id:${req.params.id} at :${partner.date}`
                })
                newLog.save()
                console.log(partner)
                console.log('log success')
                res.json("delete success");
            })
            .catch(err => res.status(404).json("delete failed "))


    });


module.exports = router;


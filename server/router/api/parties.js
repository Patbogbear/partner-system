const express = require("express");
const router = express.Router();
const passport = require("passport")

const Parties = require("../../model/Parties")

// $route get api/parties/test
// @desc return require json data 
// @ access public

router.get("/test", (req, res) => {
    res.json({ msg: "party works" })
})


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
    if (req.body.service_introduce) parties.service_introduce = req.body.service_introduce;
    if (req.body.advantage_features_introduce) parties.advantage_features_introduce = req.body.advantage_features_introduce;
    if (req.body.major_cliens_or_case) parties.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) parties.website = req.body.website;
    if (req.body.tier) parties.tier = req.body.tier;
    if (req.body.first_time_cooperate) parties.first_time_cooperate = req.body.first_time_cooperate;
    if (req.body.marketing_data) parties.marketing_data = req.body.marketing_data;
    if (req.body.transfer_data) parties.transfer_data = req.body.transfer_data;
    if (req.body.channel_categroy_activate_data) parties.channel_categroy_activate_data = req.body.channel_categroy_activate_data;
    if (req.body.coorprate_score) parties.coorprate_score = req.body.coorprate_score;
    if (req.body.POC_HZ) parties.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) parties.POC_SH = req.body.POC_SH;
    if (req.body.HZ_tracking_process) parties.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.SH_tracking_process) parties.SH_tracking_process = req.body.SH_tracking_process;
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
    if (req.body.service_introduce) parties.service_introduce = req.body.service_introduce;
    if (req.body.advantage_features_introduce) parties.advantage_features_introduce = req.body.advantage_features_introduce;
    if (req.body.major_cliens_or_case) parties.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) parties.website = req.body.website;
    if (req.body.tier) parties.tier = req.body.tier;
    if (req.body.first_time_cooperate) parties.first_time_cooperate = req.body.first_time_cooperate;
    if (req.body.marketing_data) parties.marketing_data = req.body.marketing_data;
    if (req.body.transfer_data) parties.transfer_data = req.body.transfer_data;
    if (req.body.channel_categroy_activate_data) parties.channel_categroy_activate_data = req.body.channel_categroy_activate_data;
    if (req.body.coorprate_score) parties.coorprate_score = req.body.coorprate_score;
    if (req.body.POC_HZ) parties.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) parties.POC_SH = req.body.POC_SH;
    if (req.body.HZ_tracking_process) parties.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.SH_tracking_process) parties.SH_tracking_process = req.body.SH_tracking_process;
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
            .then(res.json("delete success"))
            .catch(err => res.status(404).json("delete failed "))


    });
 

module.exports = router;


const express = require("express");
const router = express.Router();
const passport = require("passport")

const Partners = require("../../model/Partners")
const Log = require("../../model/Logs")
const AccessRequest = require("../../model/AccessRequests")
const Users = require("../../model/Users")

// $route get api/partners/test
// @desc return require json data 
// @ access public

// router.get("/test", (req, res) => {
//     res.json({ msg: "partner works" })
// })


// $route get api/partners/add
// @desc return require json data 
// @ access private

router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const partners = {};

    if (req.body.cluster) partners.cluster = req.body.cluster;
    if (req.body.third_partner_type) partners.third_partner_type = req.body.third_partner_type;
    if (req.body.third_partner_name) partners.third_partner_name = req.body.third_partner_name;
    if (req.body.b2b_or_b2c) partners.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.partner_location) partners.partner_location = req.body.partner_location;
    if (req.body.partner_scope) partners.partner_scope = req.body.partner_scope;
    if (req.body.introduce) partners.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) partners.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) partners.website = req.body.website;
    if (req.body.sh_tier) partners.sh_tier = req.body.sh_tier;
    if (req.body.hz_tier) partners.hz_tier = req.body.hz_tier;
    if (req.body.bj_tier) partners.bj_tier = req.body.bj_tier;

    // SH, HZ, BJ contact details
    partners.sh_contact = {
        channel_contact: req.body.sh_contact?.channel_contact,
        channel_contact_position: req.body.sh_contact?.channel_contact_position,
        channel_contact_information: req.body.sh_contact?.channel_contact_information
    };
    partners.hz_contact = {
        channel_contact: req.body.hz_contact?.channel_contact,
        channel_contact_position: req.body.hz_contact?.channel_contact_position,
        channel_contact_information: req.body.hz_contact?.channel_contact_information
    };
    partners.bj_contact = {
        channel_contact: req.body.bj_contact?.channel_contact,
        channel_contact_position: req.body.bj_contact?.channel_contact_position,
        channel_contact_information: req.body.bj_contact?.channel_contact_information
    };

    if (req.body.vertical) partners.vertical = req.body.vertical;
    if (req.body.POC_HZ) partners.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) partners.POC_SH = req.body.POC_SH;
    if (req.body.POC_BJ) partners.POC_BJ = req.body.POC_BJ;
    if (req.body.HZ_tracking_process) partners.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.HZ_tracking_process_segment) partners.HZ_tracking_process_segment = req.body.HZ_tracking_process_segment;
    if (req.body.SH_tracking_process) partners.SH_tracking_process = req.body.SH_tracking_process;
    if (req.body.SH_tracking_process_segment) partners.SH_tracking_process_segment = req.body.SH_tracking_process_segment;
    if (req.body.BJ_tracking_process) partners.BJ_tracking_process = req.body.BJ_tracking_process;
    if (req.body.BJ_tracking_process_segment) partners.BJ_tracking_process_segment = req.body.BJ_tracking_process_segment;
    if (req.body.hz_marketing_data) partners.hz_marketing_data = req.body.hz_marketing_data;
    if (req.body.sh_marketing_data) partners.sh_marketing_data = req.body.sh_marketing_data;
    if (req.body.bj_marketing_data) partners.bj_marketing_data = req.body.bj_marketing_data;
    if (req.body.sh_transfer_data) partners.sh_transfer_data = req.body.sh_transfer_data;
    if (req.body.hz_transfer_data) partners.hz_transfer_data = req.body.hz_transfer_data;
    if (req.body.bj_transfer_data) partners.bj_transfer_data = req.body.bj_transfer_data;

    new Partners(partners).save().then((partners) => {
        res.json(partners)
    });
});

// $route get api/partners/
// @desc return require json data 
// @ access private

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Partners.find().then((partners) => {
        if (!partners) {
            return res.status(404).json("no content")
        }
        res.json(partners)
    })
        .catch(err => res.status(404).json(err));
})

// $route get api/partners/export
// @desc return require json data
// @ access private 

router.get("/export", passport.authenticate("jwt", { session: false }), (req, res) => {
    Partners.find().then((partners) => {
        if (!partners || partners.length === 0) {
            return res.status(404).json("no content")
        }
        res.json(partners)
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

// $route get api/partners/:id
// @desc return require json data 
// @ access private

let originalPartner = {};

router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const partner = await Partners.findOne({ _id: req.params.id });

        if (!partner) {
            return res.status(404).json("no content");
        }

        // 复制原始的partner数据
        Object.assign(originalPartner, partner.toObject());

        const filteredPartner = await filterProtectedFields(req.user, partner);

        res.json(filteredPartner);

    } catch (error) {
        res.status(404).json(error);
    }
});

// below code is authenticated logic

function handleSalesFields(requestedContactField) {

    switch (requestedContactField) {
        case 'sh_contact':
            partner.sh_contact = originalPartner.sh_contact;
            break;
        case 'hz_contact':
            partner.hz_contact = originalPartner.hz_contact;
            break;
        case 'bj_contact':
            partner.bj_contact = originalPartner.bj_contact;
            break;
    }
}

async function filterProtectedFields(user, partner) {

    // super-admin works fine with all access 
    if (user.identity === 'Super-Admin') {
        return partner;
    }

    //works fine for team-leader
    if (user.identity === 'Team-Leader') {
        // 根据用户的 cluster 来决定他们可以访问的数据
        switch (user.cluster) {
            case 'SH':
                partner.hz_contact = undefined;
                partner.bj_contact = undefined;
                break;
            case 'HZ':
                partner.sh_contact = undefined;
                partner.bj_contact = undefined;
                break;
            case 'BJ':
                partner.sh_contact = undefined;
                partner.hz_contact = undefined;
                break;
        }
        return partner;
    }

    //works fine for pod-leader

    if (user.identity === 'Pod-Leader') {
        const fullUser = await Users.findOne({ _id: user._id });
        // 如果用户是 pod-lead 并且邮箱与 poc-hz 匹配，只展示 hz-contact
     
        partner.sh_contact = undefined;
        partner.hz_contact = undefined;
        partner.bj_contact = undefined;
  
        // 根据 user 的 ID 与 POC 字段的匹配来决定哪个字段可见
        if (fullUser.email === partner.POC_HZ) {
            partner.hz_contact = originalPartner.hz_contact;  // 确保 originalPartner 是之前存储的完整 partner 对象
        } else if (fullUser.email === partner.POC_BJ) {
            partner.bj_contact = originalPartner.bj_contact;
        } else if (fullUser.email === partner.POC_SH) {
            partner.sh_contact = originalPartner.sh_contact;
        }
             
        return partner;
    }

    //sales works fine 
    if (user.identity === 'Sales') {
        // 默认展示所有字段，除了以下特定字段

        partner.sh_contact = undefined;
        partner.hz_contact = undefined;
        partner.bj_contact = undefined;

        // 检查是否有任何已批准的请求，允许查看特定的联系人字段
        const approvedRequests = await AccessRequest.find({
            userId: user._id,
            partnerId: partner._id,
            status: 'APPROVED'
        });

        approvedRequests.forEach(request => {
            handleSalesFields(request.requestedContactField);
        });

        return partner;
    }
}


// $route get api/partners/edit
// @desc return require json data 
// @ access private

router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const partners = {};

    if (req.body.cluster) partners.cluster = req.body.cluster;
    if (req.body.third_partner_type) partners.third_partner_type = req.body.third_partner_type;
    if (req.body.third_partner_name) partners.third_partner_name = req.body.third_partner_name;
    if (req.body.b2b_or_b2c) partners.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.partner_location) partners.partner_location = req.body.partner_location;
    if (req.body.partner_scope) partners.partner_scope = req.body.partner_scope;
    if (req.body.introduce) partners.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) partners.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) partners.website = req.body.website;
    if (req.body.sh_tier) partners.sh_tier = req.body.sh_tier;
    if (req.body.hz_tier) partners.hz_tier = req.body.hz_tier;
    if (req.body.bj_tier) partners.bj_tier = req.body.bj_tier;

    // SH, HZ, BJ contact details
    partners.SH = {
        channel_contact: req.body.SH?.channel_contact,
        channel_contact_position: req.body.SH?.channel_contact_position,
        channel_contact_information: req.body.SH?.channel_contact_information
    };
    partners.HZ = {
        channel_contact: req.body.HZ?.channel_contact,
        channel_contact_position: req.body.HZ?.channel_contact_position,
        channel_contact_information: req.body.HZ?.channel_contact_information
    };
    partners.BJ = {
        channel_contact: req.body.BJ?.channel_contact,
        channel_contact_position: req.body.BJ?.channel_contact_position,
        channel_contact_information: req.body.BJ?.channel_contact_information
    };

    if (req.body.vertical) partners.vertical = req.body.vertical;
    if (req.body.POC_HZ) partners.POC_HZ = req.body.POC_HZ;
    if (req.body.POC_SH) partners.POC_SH = req.body.POC_SH;
    if (req.body.POC_BJ) partners.POC_BJ = req.body.POC_BJ;
    if (req.body.HZ_tracking_process) partners.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.HZ_tracking_process_segment) partners.HZ_tracking_process_segment = req.body.HZ_tracking_process_segment;
    if (req.body.SH_tracking_process) partners.SH_tracking_process = req.body.SH_tracking_process;
    if (req.body.SH_tracking_process_segment) partners.SH_tracking_process_segment = req.body.SH_tracking_process_segment;
    if (req.body.BJ_tracking_process) partners.BJ_tracking_process = req.body.BJ_tracking_process;
    if (req.body.BJ_tracking_process_segment) partners.BJ_tracking_process_segment = req.body.BJ_tracking_process_segment;
    if (req.body.hz_marketing_data) partners.hz_marketing_data = req.body.hz_marketing_data;
    if (req.body.sh_marketing_data) partners.sh_marketing_data = req.body.sh_marketing_data;
    if (req.body.bj_marketing_data) partners.bj_marketing_data = req.body.bj_marketing_data;
    if (req.body.sh_transfer_data) partners.sh_transfer_data = req.body.sh_transfer_data;
    if (req.body.hz_transfer_data) partners.hz_transfer_data = req.body.hz_transfer_data;
    if (req.body.bj_transfer_data) partners.bj_transfer_data = req.body.bj_transfer_data;

    Partners.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: partners },
        { new: true }
    ).then(partners => res.json(partners))

})


// $route delete api/partners/:id
// @desc return require json data 
// @ access private  

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Partners.findOneAndRemove({ _id: req.params.id })
            .then(partner => {
                if (!partner) {
                    return res.status(404).json("Partner not found")
                }
                const userId = req.user.id;
                const newLog = new Log({
                    userId,
                    action: 'delete partner',
                    description: `user ${req.user.email} delete partner name:${partner.third_partner_name} partner id:${req.params.id} at :${partner.date}`
                })
                newLog.save()
                console.log(partner)
                console.log('log success')
                res.json("delete success");
            })
            .catch(err => res.status(404).json("delete failed "))


    });


module.exports = router;


const express = require("express");
const router = express.Router();
const passport = require("passport")

const Partners = require("../../model/Partners")
const Log = require("../../model/Logs")
const AccessRequest = require("../../model/AccessRequests")
const Users = require("../../model/Users")
const multer = require("multer")
const fs = require("fs")
const fastcsv = require("fast-csv")


// $route get api/partners/add
// @desc return require json data 
// @ access private


router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
    const partners = {};

    const userIdentity = req.user.identity
    const userCluster = req.user.cluster


    if (req.body.cluster) partners.cluster = req.body.cluster;
    if (req.body.third_partner_type) partners.third_partner_type = req.body.third_partner_type;
    if (req.body.third_partner_name) partners.third_partner_name = req.body.third_partner_name;
    if (req.body.b2b_or_b2c) partners.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.partner_location) partners.partner_location = req.body.partner_location;
    if (req.body.partner_scope) partners.partner_scope = req.body.partner_scope;
    if (req.body.introduce) partners.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) partners.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) partners.website = req.body.website;
    if (req.body.coverage_province) partners.coverage_province = req.body.coverage_province;
    if (req.body.sh_tier) partners.sh_tier = req.body.sh_tier;
    if (req.body.hz_tier) partners.hz_tier = req.body.hz_tier;
    if (req.body.bj_tier) partners.bj_tier = req.body.bj_tier;
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
    if (req.body.hz_marketing_data_leads) partners.hz_marketing_data_leads = req.body.hz_marketing_data_leads;
    if (req.body.sh_marketing_data) partners.sh_marketing_data = req.body.sh_marketing_data;
    if (req.body.sh_marketing_data_leads) partners.sh_marketing_data_leads = req.body.sh_marketing_data_leads;
    if (req.body.bj_marketing_data) partners.bj_marketing_data = req.body.bj_marketing_data;
    if (req.body.bj_marketing_data_leads) partners.bj_marketing_data_leads = req.body.bj_marketing_data_leads;
    if (req.body.sh_transfer_data) partners.sh_transfer_data = req.body.sh_transfer_data;
    if (req.body.sh_transfer_data_leads) partners.sh_transfer_data_leads = req.body.sh_transfer_data_leads;
    if (req.body.hz_transfer_data) partners.hz_transfer_data = req.body.hz_transfer_data;
    if (req.body.hz_transfer_data_leads) partners.hz_transfer_data_leads = req.body.hz_transfer_data_leads;
    if (req.body.bj_transfer_data) partners.bj_transfer_data = req.body.bj_transfer_data;
    if (req.body.bj_transfer_data_leads) partners.bj_transfer_data_leads = req.body.bj_transfer_data_leads;




    // 根据用户角色和集群来决定是否更新联系信息
    if (userIdentity === 'Super-Admin') {
        // Super-Admin可以更新所有字段
        // 更新sh_contact, hz_contact, bj_contact
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
    } else if (userIdentity === 'Team-Leader' || userIdentity === 'POC') {
        // 对于Pod-leader/Team-leader
        if (userCluster === 'HZ') {
            // 只更新hz_contact
            if (req.body.hz_contact) {
                partners.hz_contact = req.body.hz_contact;
            }
        } else if (userCluster === 'SH') {
            // 只更新sh_contact
            if (req.body.sh_contact) {
                partners.sh_contact = req.body.sh_contact;
            }
        } else if (userCluster === 'BJ') {
            // 只更新bj_contact
            if (req.body.bj_contact) {
                partners.bj_contact = req.body.bj_contact;
            }

        }
    }

    new Partners(partners).save().then((partners) => {
        res.status(200).json({ partners, message: "add partner success" })
    });
});

// $route get api/partners/
// @desc return require json data 
// @ access private

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    Partners.find().then((partners) => {
        if (!partners) {
            return res.status(400).json({ message: "no content" })
        }
        //这里未基于权限对partners中的联系人信息进行处理，存在一个非常小的隐患，主要是在index和partner list页面总体获取数据时
        res.json(partners)
    })
        .catch(error => res.status(404).json({ error: "serve error,could not fetch partner list", message: "could not fetch partner list" }));
})



// $route get api/partners/:id
// @desc return require json data 
// @ access private



router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    let originalPartner = {};
    try {
        const partner = await Partners.findOne({ _id: req.params.id });


        if (!partner) {
            return res.status(400).json({ message: "no content" });
        }

        // copy origin partner data object
        Object.assign(originalPartner, partner.toObject());

        const filteredPartner = await filterProtectedFields(req.user, partner, originalPartner);
        res.json(filteredPartner);

    } catch (error) {
        res.status(404).json({ error: "serve error,could not get data", message: "serve error, could not get datat" });
    }
});

// below code is default authenticated partner logic

function setFieldMessages(obj) {
    const unauthorizedMessage = "尚未获得查看权限";
    const emptyFieldMessage = "目前该信息尚未填充";
    const contactProperties = ['channel_contact', 'channel_contact_position', 'channel_contact_information'];

    contactProperties.forEach(field => {
        if (!obj[field] || obj[field].trim() === "" || obj[field] === emptyFieldMessage)
            obj[field] = emptyFieldMessage;
        else
            obj[field] = unauthorizedMessage;
    });
}

function setEmptyFieldMessages(contactData) {
    const contactProperties = ["channel_contact", "channel_contact_position", "channel_contact_information"];
    contactProperties.forEach(prop => {
        if (!contactData[prop] || contactData[prop].trim() === "") {
            contactData[prop] = "目前该信息尚未填充";
        }
    });

}


async function filterProtectedFields(user, partner, originalPartner) {

    function handleSalesFields(partner, requestedContactField) {

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

    // super-admin works fine with all access 
    if (user.identity === 'Super-Admin') {
        // handle all contact data
        ['sh_contact', 'hz_contact', 'bj_contact'].forEach(field => {
            partner[field] = partner[field] || {};
            setEmptyFieldMessages(partner[field]);
        });


        return partner;
    }

    if (user.identity === 'PM') {
        // 获取已批准的请求

        const approvedRequests = await AccessRequest.find({
            userId: user._id,
            partnerId: partner._id,
            status: 'APPROVED'
        });

        let approvedFields = [];
        approvedRequests.forEach(request => {
            approvedFields.push(request.requestedContactField);
        });

        // 处理已批准的请求
        ['sh_contact', 'hz_contact', 'bj_contact'].forEach(field => {
            if (approvedFields.includes(field)) {
                handleSalesFields(partner, field);
            } else {
                partner[field] = partner[field] || {};
                setFieldMessages(partner[field]);
            }
        });

        // 根据 user 的 email 来恢复相应的数据
        if (user.email === 'congp@google.com' && originalPartner.sh_contact != null) {
            partner.sh_contact = originalPartner.sh_contact;
            partner.hz_contact = originalPartner.hz_contact;
        } else if (user.email === 'dongjia@google.com' && originalPartner.bj_contact != null) {
            partner.bj_contact = originalPartner.bj_contact;
        }
        return partner;
    }

    //works fine for team-leader
    if (user.identity === 'Team-Leader') {

        // 获取已批准的请求
        const approvedRequests = await AccessRequest.find({
            userId: user._id,
            partnerId: partner._id,
            status: 'APPROVED'
        });

        let approvedFields = [];
        approvedRequests.forEach(request => {
            approvedFields.push(request.requestedContactField);
        });

        // 处理已批准的请求
        ['sh_contact', 'hz_contact', 'bj_contact'].forEach(field => {
            if (approvedFields.includes(field)) {
                handleSalesFields(partner, field);
            } else {
                partner[field] = partner[field] || {};
                setFieldMessages(partner[field]);
            }
        });

        // 根据 user 的 cluster 来恢复相应的数据
        if (user.cluster === 'SH' && originalPartner.sh_contact != null) {
            partner.sh_contact = originalPartner.sh_contact;
        } else if (user.cluster === 'HZ' && originalPartner.hz_contact != null) {
            partner.hz_contact = originalPartner.hz_contact;
        } else if (user.cluster === 'BJ' && originalPartner.bj_contact != null) {
            partner.bj_contact = originalPartner.bj_contact;
        }
        return partner;
    }
    //works fine for pod-leader
    if (user.identity === 'POC') {
        const fullUser = await Users.findOne({ _id: user._id });


        const approvedRequests = await AccessRequest.find({
            userId: user._id,
            partnerId: partner._id,
            status: 'APPROVED'
        });

        let approvedFields = [];
        approvedRequests.forEach(request => {
            approvedFields.push(request.requestedContactField);
        });

        ['sh_contact', 'hz_contact', 'bj_contact'].forEach(field => {
            if (approvedFields.includes(field)) {
                // 已获批准，从原始数据中恢复它
                handleSalesFields(partner, field);
            } else {
                partner[field] = partner[field] || {};
                setFieldMessages(partner[field]);
            }
        });


        // 根据 user 的 ID 与 POC 字段的匹配来决定哪个字段可见
        if (fullUser.email === partner.POC_HZ && originalPartner.hz_contact != null) {
            partner.hz_contact = originalPartner.hz_contact;
        } else if (fullUser.email === partner.POC_BJ && originalPartner.bj_contact != null) {
            partner.bj_contact = originalPartner.bj_contact;
        } else if (fullUser.email === partner.POC_SH && originalPartner.sh_contact != null) {
            partner.sh_contact = originalPartner.sh_contact;
        }

        return partner;
    }

    //sales works fine 
    if (user.identity === 'Sales') {
        // 获取已批准的请求列表
        const approvedRequests = await AccessRequest.find({
            userId: user._id,
            partnerId: partner._id,
            status: 'APPROVED'
        });

        let approvedFields = [];
        approvedRequests.forEach(request => {
            approvedFields.push(request.requestedContactField);
        });

        ['sh_contact', 'hz_contact', 'bj_contact'].forEach(field => {
            if (approvedFields.includes(field)) {
                // 已获批准，从原始数据中恢复它
                handleSalesFields(partner, field);
            } else {
                partner[field] = partner[field] || {};
                setFieldMessages(partner[field]);
            }
        });

        return partner;
    }
}


// $route get api/partners/edit
// @desc return require json data 
// @ access private

router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const partners = {};

    const userIdentity = req.user.identity
    const userCluster = req.user.cluster
    console.log(req.body.POC_BJ)
    if (req.body.cluster) partners.cluster = req.body.cluster;
    if (req.body.third_partner_type) partners.third_partner_type = req.body.third_partner_type;
    if (req.body.third_partner_name) partners.third_partner_name = req.body.third_partner_name;
    if (req.body.b2b_or_b2c) partners.b2b_or_b2c = req.body.b2b_or_b2c;
    if (req.body.partner_location) partners.partner_location = req.body.partner_location;
    if (req.body.partner_scope) partners.partner_scope = req.body.partner_scope;
    if (req.body.introduce) partners.introduce = req.body.introduce;
    if (req.body.major_cliens_or_case) partners.major_cliens_or_case = req.body.major_cliens_or_case;
    if (req.body.website) partners.website = req.body.website;
    if (req.body.coverage_province) partners.coverage_province = req.body.coverage_province;
    if (req.body.sh_tier) partners.sh_tier = req.body.sh_tier;
    if (req.body.hz_tier) partners.hz_tier = req.body.hz_tier;
    if (req.body.bj_tier) partners.bj_tier = req.body.bj_tier;
    if (req.body.vertical) partners.vertical = req.body.vertical;
    //此处为了处理前端提供一个poc为空的情况下，能成功在数据库中写入的逻辑
    if (typeof req.body.POC_HZ !== 'undefined') {
        partners.POC_HZ = req.body.POC_HZ;
    }
    if (typeof req.body.POC_SH !== 'undefined') {
        partners.POC_SH = req.body.POC_SH;
    }
    if (typeof req.body.POC_BJ !== 'undefined') {
        partners.POC_BJ = req.body.POC_BJ;
    }
    if (req.body.HZ_tracking_process) partners.HZ_tracking_process = req.body.HZ_tracking_process;
    if (req.body.HZ_tracking_process_segment) partners.HZ_tracking_process_segment = req.body.HZ_tracking_process_segment;
    if (req.body.SH_tracking_process) partners.SH_tracking_process = req.body.SH_tracking_process;
    if (req.body.SH_tracking_process_segment) partners.SH_tracking_process_segment = req.body.SH_tracking_process_segment;
    if (req.body.BJ_tracking_process) partners.BJ_tracking_process = req.body.BJ_tracking_process;
    if (req.body.BJ_tracking_process_segment) partners.BJ_tracking_process_segment = req.body.BJ_tracking_process_segment;
    if (req.body.hz_marketing_data) partners.hz_marketing_data = req.body.hz_marketing_data;
    if (req.body.hz_marketing_data_leads) partners.hz_marketing_data_leads = req.body.hz_marketing_data_leads;
    if (req.body.sh_marketing_data) partners.sh_marketing_data = req.body.sh_marketing_data;
    if (req.body.sh_marketing_data_leads) partners.sh_marketing_data_leads = req.body.sh_marketing_data_leads;
    if (req.body.bj_marketing_data) partners.bj_marketing_data = req.body.bj_marketing_data;
    if (req.body.bj_marketing_data_leads) partners.bj_marketing_data_leads = req.body.bj_marketing_data_leads;
    if (req.body.sh_transfer_data) partners.sh_transfer_data = req.body.sh_transfer_data;
    if (req.body.sh_transfer_data_leads) partners.sh_transfer_data_leads = req.body.sh_transfer_data_leads;
    if (req.body.hz_transfer_data) partners.hz_transfer_data = req.body.hz_transfer_data;
    if (req.body.hz_transfer_data_leads) partners.hz_transfer_data_leads = req.body.hz_transfer_data_leads;
    if (req.body.bj_transfer_data) partners.bj_transfer_data = req.body.bj_transfer_data;
    if (req.body.bj_transfer_data_leads) partners.bj_transfer_data_leads = req.body.bj_transfer_data_leads;

    // 根据用户角色和集群来决定是否更新联系信息
    if (userIdentity === 'Super-Admin') {
        // Super-Admin可以更新所有字段
        // 更新sh_contact, hz_contact, bj_contact
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
    } else if (userIdentity === 'Team-Leader' || userIdentity === 'POC') {
        // 对于Pod-leader/Team-leader
        if (userCluster === 'HZ') {
            // 只更新hz_contact
            if (req.body.hz_contact) {
                partners.hz_contact = req.body.hz_contact;
            }
        } else if (userCluster === 'SH') {
            // 只更新sh_contact
            if (req.body.sh_contact) {
                partners.sh_contact = req.body.sh_contact;
            }
        } else if (userCluster === 'BJ') {
            // 只更新bj_contact
            if (req.body.bj_contact) {
                partners.bj_contact = req.body.bj_contact;
            }

        }
    }



    Partners.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: partners },
        { new: true }
    ).then(partners => res.status(200).json({ partners, message: "partner update success" }))

})


// $route delete api/partners/:id
// @desc return require json data 
// @ access private  

router.delete("/delete/:id", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Partners.findOneAndRemove({ _id: req.params.id })
            .then(partner => {
                if (!partner) {
                    return res.status(400).json({ message: "Partner not found" })
                }
                const userId = req.user.id;
                const newLog = new Log({
                    userId,
                    action: 'delete partner',
                    description: `user ${req.user.email} delete partner name:${partner.third_partner_name} `
                })
                newLog.save()
                res.status(200).json({ message: "delete success" });
            })
            .catch(err => res.status(404).json({ error: "delete failed " }))


    });


// $route get api/partners/export
// @desc return require json data
// @ access private 
//原有的导出接口，会导出除联系人信息外所有值
// router.get("/export", passport.authenticate("jwt", { session: false }), (req, res) => {
//     Partners.find().then((partners) => {
//         console.log(111)
//         if (!partners || partners.length === 0) {
//             return res.status(400).json({ message: "no content" })
//         }
//         res.json(partners)
//         const userId = req.user.id
//         const newLog = new Log({
//             userId,
//             action: 'export partners',
//             description: `user ${req.user.email} export partners data `
//         });
//         newLog.save()
//     })
//         .catch(err => res.status(404).json({ error: "serve error,could not export data", message: "serve error could not export data" }));

// })



const { Transform } = require('stream');

router.get('/export/marketing', passport.authenticate('jwt', { session: false }), (req, res) => {
    Partners.find({}, '_id third_partner_name hz_marketing_data hz_marketing_data_leads sh_marketing_data sh_marketing_data_leads bj_marketing_data bj_marketing_data_leads hz_transfer_data hz_transfer_data_leads sh_transfer_data sh_transfer_data_leads bj_transfer_data bj_transfer_data_leads ') // 其他所有需要的字段
        .then((partners) => {
            if (!partners || partners.length === 0) {
                return res.status(400).json({ message: "no content" });
            }

            const csvStream = fastcsv.format({ headers: true });
            const transformStream = new Transform({
                transform(partner, encoding, callback) {
                    const transformed = { ...partner.toObject() }; // 将 Mongoose 文档转换为普通对象
                    // 这里可以添加其他转换逻辑，比如处理特殊字符等
                    callback(null, transformed);
                },
                objectMode: true,
            });

            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename="partners.csv"');

            transformStream.pipe(csvStream).pipe(res);

            partners.forEach(partner => transformStream.write(partner));
            transformStream.end();
        })
        .catch(err => res.status(404).json({ error: "serve error, could not export data", message: "serve error could not export data" }));
});





//const storage = multer.memoryStorage();
//const upload = multer({ storage: storage });

// $route delete api/partners/upload
// @desc return require json data 
// @ access private  

// router.post('/upload/old', passport.authenticate("jwt", { session: false }), upload.single('csv'), async (req, res) => {
//     const streamifier = require('streamifier');
//     const csvStream = streamifier.createReadStream(req.file.buffer);

//     csvStream
//         .pipe(fastcsv.parse({ headers: true }))
//         .on('data', async (row) => {
//             // 处理空值
//             for (let key in row) {
//                 if (row[key] === '') {
//                     row[key] = null;
//                 }
//             }

//             // 根据 third_partner_type 和 third_partner_name 查找是否存在此数据
//             const existingPartner = await Partners.findOne({
//                 third_partner_type: row.third_partner_type,
//                 third_partner_name: row.third_partner_name
//             });

//             // 如果存在，则检查除 third_partner_type 和 third_partner_name 以外的其他列是否有变化，并进行更新
//             if (existingPartner) {
//                 let isChanged = false;

//                 for (let key in row) {
//                     if (key !== 'third_partner_type' && key !== 'third_partner_name' && existingPartner[key] !== row[key]) {
//                         isChanged = true;
//                         existingPartner[key] = row[key];
//                     }
//                 }

//                 if (isChanged) {
//                     await existingPartner.save();
//                 }
//             }
//             // 否则，插入新条目
//             else {
//                 await Partners.create(row);
//             }
//         })
//         .on('end', () => {
//             res.status(200).send({ message: "upload successfully" });
//         })
//         .on('error', (error) => {
//             console.error(error);
//             res.status(404).send({ message: "serve error" });
//         });
// });


// 设置Multer存储配置
const upload = multer({ dest: 'tmp/csv/' });

router.post('/upload/marketing', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = req.file.path;
    const errors = [];
    const stream = fs.createReadStream(filePath);

    const csvStream = fastcsv.parse({ headers: true })
        .on('data', async (row) => {
            try {
                const { _id, ...updateData } = row;
                const partner = await Partners.findById(_id);
                if (partner) {
                    Object.assign(partner, updateData);
                    await partner.save();
                } else {
                    errors.push(`Partner with ID ${_id} not found.`);
                }
            } catch (err) {
                errors.push(`Error processing row with ID ${row._id}: ${err.message}`);
            }
        })
        .on('end', async () => {
            fs.unlinkSync(filePath); // 删除临时文件
            if (errors.length > 0) {
                return res.status(400).json({ errors });
            }
            res.json({ message: 'File processed successfully.' });
        });

    stream.pipe(csvStream);
});


module.exports = router;



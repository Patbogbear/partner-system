const express = require("express");
const router = express.Router();
const passport = require("passport")

const AccessRequest = require("../../model/AccessRequests");

//const { route } = require("./partners");




router.post('/access-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {

        const { userId, partnerId, requestedContactLocation } = req.body;

        // 转换requestedContactLocation到对应的字段名
        const locationToFieldMapping = {
            'SH': 'sh_contact',
            'HZ': 'hz_contact',
            'BJ': 'bj_contact'
        };
        const requestedContactField = locationToFieldMapping[requestedContactLocation];

        // 验证userId、partnerId和requestedContactField是否存在
        if (!userId || !partnerId || !requestedContactField) {
            return res.status(400).send({ message: 'userId, partnerId, and requestedContactLocation are required.' });
        }

        // 检查是否存在重复请求
        const existingRequest = await AccessRequest.findOne({ userId, partnerId, requestedContactField, status: 'PENDING' });
        if (existingRequest) {
            return res.status(400).send({ message: `You already have a pending request for this partner's ${requestedContactLocation} contact information.` });
        }

        const newRequest = new AccessRequest({ userId, partnerId, requestedContactField });
        await newRequest.save();
        res.status(201).send(newRequest);
    } catch (error) {
        res.status(500).send({ message: 'Error creating access request.' });
    }
});

router.get('/all-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        console.log(req.query)
        const requests = await AccessRequest.find({ status: 'PENDING' }).populate('userId').populate('partnerId');
        res.status(200).send(requests);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching access requests' })
    }
})

router.put('/all-requests/:requestAccessId', async (req, res) => {
    try {
        const { status } = req.body
        console.log(req.params)
        const updatedRequest = await AccessRequest.findByIdAndUpdate(req.params.requestAccessId, { status }, { new: true });
        
        res.status(200).send(updatedRequest)
       

    } catch (error) {
        res.status(500).send({ message: 'Error approving requests' })
    }
})

module.exports = router;
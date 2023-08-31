const express = require("express");
const router = express.Router();
const passport = require("passport")

const AccessRequest = require("../../model/AccessRequests");

//const { route } = require("./partners");



//request for partner contact information 
router.post('/access-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {

        const { userId, partnerId, requestedContactField } = req.body;


        // 验证userId、partnerId和requestedContactField是否存在
        if (!userId || !partnerId || !requestedContactField) {
            return res.status(400).send({ message: 'userId, partnerId, and requestedContactField are required.' });
        }

        // 检查是否存在重复请求
        const existingRequest = await AccessRequest.findOne({ userId, partnerId, requestedContactField });
        if (existingRequest) {
            if (existingRequest.status === 'APPROVED') {
                return res.status(200).send({ message: 'Access already granted' })
            } else if (existingRequest.status === 'PENDING') {
                return res.status(200).send({ message: `You already have a pending request for this partner's ${requestedContactField} contact information.` });
            }

        }

        const newRequest = new AccessRequest({ userId, partnerId, requestedContactField });
        await newRequest.save();
        res.status(201).send({newRequest,message:"request has been submitted"});
    } catch (error) {
        res.status(500).send({ message: 'Error creating access request.' });
    }
});



router.get('/all-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const filter = { status: 'PENDING' };
        let requests = await AccessRequest.find(filter).populate('userId').populate('partnerId');

        // 当用户身份为 Super-Admin
        if (req.user.identity === 'Super-Admin') {
            return res.status(200).send(requests);
        }

        // 当用户身份为 Team-Leader，根据其 cluster 属性筛选 AccessRequest
        if (req.user.identity === 'Team-Leader') {
            requests = requests.filter(request => request.userId && request.userId.cluster === req.user.cluster);
            return res.status(200).send(requests);
        }

        res.status(403).send({ message: 'Permission denied' });

    } catch (error) {
        res.status(500).send({ message: 'Error fetching access requests' });
    }
});



// approve or deny access by high level user 
router.put('/all-requests/:requestAccessId', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { status } = req.body

        const updatedRequest = await AccessRequest.findByIdAndUpdate(req.params.requestAccessId, { status }, { new: true });

        res.status(200).send(updatedRequest)


    } catch (error) {
        res.status(500).send({ message: 'Error approving requests' })
    }
})

router.get('/user-requests/:userId', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { userId } = req.params;
      
        // 只允许用户访问他自己的请求
        if (req.user.id !== userId) {
            return res.status(403).send({ message: 'Permission denied' });
        }

        const filter = {
            userId: userId,
            $or: [
                { status: 'APPROVED' },
                { status: 'DENIED' }
            ]
        };

        let requests = await AccessRequest.find(filter).populate('partnerId');
        console.log(requests)
        return res.status(200).send(requests);
        

    } catch (error) {
        res.status(500).send({ message: 'Error fetching user requests.' });
    }
});

module.exports = router;
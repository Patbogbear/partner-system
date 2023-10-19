const express = require("express");
const router = express.Router();
const passport = require("passport")
const AccessRequest = require("../../model/AccessRequests");
const nodemailer =require('nodemailer')

const transporter =nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:'OAuth2',
        user:'ppartnersystememail@gmail.com',
        clientId:'241542371798-i4cahg9bcd0e1oaj775tt4j2kg37hst3.apps.googleusercontent.com',
        clientSecret:'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',
        refreshToken:'1//04otaz3e5wIewCgYIARAAGAQSNwF-L9IrWmkJrdE1HhsfF8pDO82MSo2Xr5mt8lBxnxCZVYOYk7K84_kNAHtzNue6jL0ZFfUvXxg'
    }
})


//request for partner contact information 
// $route get api/accessQuests/access-requests
// @desc return require json data 
// @ access public

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

        //test email 

        const mailOptions = {
            from:'ppartnersystememail@gmail.com',
            to:'jiandongz@google.com',
            subject:'test request',
            text:'new request,please have a look'
        }


        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });


        res.status(200).send({newRequest,message:"request has been submitted"});
    } catch (error) {
        res.status(404).send({ message: 'Error creating access request.' });
    }
});


//request for partner contact information 
// $route get api/accessQuests/all-requests
// @desc return require json data 
// @ access public

router.get('/all-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const filter = { status: 'PENDING' };
        let requests = await AccessRequest.find(filter).populate('userId').populate('partnerId');

        // 当用户身份为 Super-Admin
        if (req.user.identity === 'Super-Admin') {
            return res.status(200).send(requests);
        }

        // 当用户身份为 PM，根据其 cluster 属性筛选 AccessRequest
        if (req.user.identity === 'PM') {
            requests = requests.filter(request => request.userId && request.userId.cluster === req.user.cluster);
            return res.status(200).send(requests);
        }
        // 当用户身份为 Team-Leader，根据其 cluster 属性筛选 AccessRequest
        if (req.user.identity === 'Team-Leader') {
            requests = requests.filter(request => request.userId && request.userId.cluster === req.user.cluster);
            return res.status(200).send(requests);
        }

        // when user identity is pod-leader, 
        if(req.user.identity ==="Pod-Leader"){
            const pocField = `POC_${req.user.cluster}`;
            requests = requests.filter(request => request.partnerId && request.partnerId[pocField] === req.user.email);
            return res.status(200).send(requests);
        }


        res.status(400).send({ message: 'Permission denied' });

    } catch (error) {
        res.status(500).send({ message: 'Error fetching access requests' });
    }
});



// approve or deny access by high level user 
router.put('/all-requests/:requestAccessId', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { status } = req.body;

        // 请求体验证
        if (!['APPROVED', 'DENIED'].includes(status)) {
            return res.status(400).send({ message: 'Invalid status value' });
        }

        // 获取要处理的请求
        const requestToProcess = await AccessRequest.findById(req.params.requestAccessId).populate('userId').populate('partnerId');

        if (!requestToProcess) {
            return res.status(400).send({ message: 'Request not found' });
        }

        // 检查状态是否为PENDING
        if (requestToProcess.status !== 'PENDING') {
            return res.status(400).send({ message: 'Only PENDING requests can be processed' });
        }

        // 身份验证
        if (req.user.identity === 'Pod-Leader') {
            return res.status(403).send({ message: 'You do not have permission to approve or deny requests' });
        }

        if (req.user.identity === 'Team-Leader') {
            if (!requestToProcess.userId || requestToProcess.userId.cluster !== req.user.cluster) {
                return res.status(403).send({ message: 'You do not have permission to approve or deny this request' });
            }
        }

        const updatedRequest = await AccessRequest.findByIdAndUpdate(req.params.requestAccessId, { status }, { new: true });

        // 根据更新的状态提供响应消息
        const message = status === 'APPROVED' ? 'Request approved' : 'Request denied';

        res.status(200).send({ updatedRequest, message });

    } catch (error) {
        res.status(500).send({ message: 'Error processing request' });
    }
});

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
                { status: 'DENIED' },
                { status:'PENDING'}
            ]
        };

        let requests = await AccessRequest.find(filter).populate('partnerId');
     
        return res.status(200).send(requests);
        

    } catch (error) {
        res.status(500).send({ message: 'Error fetching user requests.' });
    }
});

module.exports = router;
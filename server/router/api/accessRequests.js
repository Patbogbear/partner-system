const express = require("express");
const router = express.Router();
const passport = require("passport")
const AccessRequest = require("../../model/AccessRequests");
const Partners = require("../../model/Partners")
const Logs = require("../../model/Logs")

const mailKey = require("../../../config/keys").gunMail

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.GUNMAIL_KEY || 'partner-system' });
const crypto = require('crypto')



function generateToken(value) {
    const timestamp = new Date().getTime();
    const uniqueData = value + '-' + timestamp;
    const token = crypto.createHash('sha256').update(uniqueData).digest('hex');
    return { token, timestamp }; // 返回令牌和时间戳
}

function verifyToken(requestId, tokenWithTimestamp) {
    // 从令牌中提取时间戳
    const parts = tokenWithTimestamp.split('-');
    const originalTimestamp = parts.pop(); // 获取并移除时间戳
    const token = parts.join('-'); // 剩余部分是令牌

    // 重新生成令牌
    const regeneratedToken = crypto.createHash('sha256').update(requestId + '-' + originalTimestamp).digest('hex');

    // 检查令牌是否匹配
    if (token !== regeneratedToken) {
        return false;
    }

    // 检查令牌是否过期
    if (new Date().getTime() - parseInt(originalTimestamp) > 72 * 60 * 60 * 1000) {
        return false;
    }

    return true;
}
//request for partner contact information 
// $route get api/accessQuests/access-requests
// @desc return require json data 
// @ access public

router.post('/access-requests', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {

        const { userId, userName, partnerId, requestedContactField, getPocOnly } = req.body;

        // 获取 partner 信息
        const partner = await Partners.findById(partnerId);
        if (!partner) {
            return res.status(404).send({ message: 'Partner not found.' });
        }

        // 获取请求的联系信息字段 主要是联系人电话
        const contactInfo = partner[requestedContactField];
        const channelContactInfo = contactInfo ? contactInfo.channel_contact_information : null;

        // 检查 channel_contact_information 字段是否有效
        if (!channelContactInfo || channelContactInfo === "目前该信息尚未填充") {
            return res.status(400).send({ message: '联系人信息尚未填充，请求失败' });
        }

        let emailRecipients = [];
        // 根据 requestedContactField 获取 POC 信息
        if (getPocOnly) {
            let pocField;
            let VPM;
            let PM;
            if (requestedContactField === 'sh_contact') {
                pocField = 'POC_SH';
                VPM = 'shufan@google.com'
                PM = 'congp@google.com'
            } else if (requestedContactField === 'bj_contact') {
                pocField = 'POC_BJ';
                VPM = 'chennwang@google.com'
                PM = 'dongjia@google.com'
            } else if (requestedContactField === 'hz_contact') {
                pocField = 'POC_HZ'
                VPM = 'shufan@google.com'
                PM = 'congp@google.com'
            }

            const pocInfo = partner[pocField];
            if (pocField) {
                emailRecipients.push(PM, VPM);
                return res.status(200).send({ pocInfo: pocInfo, VPM: VPM, PM: PM, message: `你将要向${pocInfo}发起申请` });

            }
        }

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


        const requestId = newRequest._id
        const PartnerName = partner.third_partner_name
        const UserName = userName
        const mailSubject = `请审核: [${UserName}申请了解Partner: ${PartnerName} 的 ${requestedContactField} 区域联系人信息]`


        // 假设 token 是您从后端获取或在前端生成的
        const { token, timestamp } = generateToken(requestId); // 获取或生成令牌
        const tokenWithTimestamp = `${token}-${timestamp}`;


        const baseUrl = 'https://partner-system.onrender.com';

        // 构建同意和不同意的链接
        const approvalLink = `${baseUrl}/public-access-requests/${requestId}/${tokenWithTimestamp}?status=APPROVED`;
        const denialLink = `${baseUrl}/public-access-requests/${requestId}/${tokenWithTimestamp}?status=DENIED`;

        // 将这些链接添加到邮件内容中
        const htmlContent = `
        <h1>${mailSubject}</h1>
        <p>Please review the request.</p >
        <p><a href="${approvalLink} ">点击同意</a > - 如果您同意此请求。</p >
        <p><a href="${denialLink}">点击不同意</a > - 如果您不同意此请求。</p >`;

        mg.messages.create('dmabc.space', {
            from: "Partner-System-2.0 <mailgun@dmabc.space>",
            to: "jiandongz@google.com",
            subject: emailRecipients,
            text: mailSubject,//需加参数
            html: htmlContent,//需加链接
        })
            .then(msg => console.log(msg)) // logs response data
            .catch(err => console.log(err)); // logs any error


        res.status(200).send({ newRequest, message: "request has been submitted" });
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

            //邮件通知功能可以从此处增加if逻辑
            return res.status(200).send(requests);
        }

        // 当用户身份为 PM，根据其 cluster 属性筛选 AccessRequest
        if (req.user.email === 'congp@google.com') {
            requests = requests.filter(request =>
                request.userId && (request.userId.cluster === 'HZ' || request.userId.cluster === 'SH')
            );
            return res.status(200).send(requests);
        }
        if (req.user.email === 'dongjia@google.com') {
            requests = requests.filter(request =>
                request.userId && (request.userId.cluster === 'BJ')
            );
            return res.status(200).send(requests);
        }

        // 当用户身份为 Team-Leader，根据其 cluster 属性筛选 AccessRequest
        if (req.user.identity === 'Team-Leader') {
            requests = requests.filter(request => request.userId && request.userId.cluster === req.user.cluster);
            return res.status(200).send(requests);
        }

        // when user identity is pod-leader, 
        if (req.user.identity === "Pod-Leader") {
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
                { status: 'PENDING' }
            ]
        };

        let requests = await AccessRequest.find(filter).populate('partnerId');

        return res.status(200).send(requests);


    } catch (error) {
        res.status(500).send({ message: 'Error fetching user requests.' });
    }
});



//需要调试和完善的接口 主要用于邮件中的点击审批 流程
router.put('/public-access-requests/:requestAccessId/:token', async (req, res) => {
    try {
        const { requestAccessId, token } = req.params;
        const { status } = req.query;
       
        // 从token中提取时间戳
        const parts = token.split('-');
        const originalTimestamp = parts.pop();
        const tokenWithoutTimestamp = parts.join('-');
        const tokenWithTimestamp = `${tokenWithoutTimestamp}-${originalTimestamp}`;

        // 验证令牌有效性和状态
        const isValid = verifyToken(requestAccessId, tokenWithTimestamp);
        if (!isValid) {
            return res.status(403).send({ message: 'Invalid or expired token' });
        }

        // 更新请求状态的逻辑...
        const resultRequest = await AccessRequest.findByIdAndUpdate(requestAccessId, { status }, { new: true });
        res.status(200).send({ message: 'Request processed successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Error processing request' });
    }
});

module.exports = router;
//login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const keys = require("../../../config/keys")
const passport = require("passport")

const User = require("../../model/Users")


const mailKey = require("../../../config/keys").gunMail
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key:process.env.GUNMAIL_KEY  || 'partner-system' });
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
    if (new Date().getTime() - parseInt(originalTimestamp) > 30 * 60 * 1000) {
        return false;
    }

    return true;
}


// $route get api/users/register
// @desc return require json data 
// @ access public

router.post("/register", (req, res) => {
    //console.log(req.body)

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ message: "email been used!" })
            } else {
                const newUser = new User({
                    name: req.body.name,
                    cluster: req.body.cluster,
                    email: req.body.email,
                    password: req.body.password,
                    identity: req.body.identity
                })
                // encode
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;;

                        newUser.password = hash;

                        newUser.save()
                            .then(user => res.status(200).json({ user, message: "success" }))
                            .catch(err = console.log(err));
                    });
                });

            }
        })
})

router.post("/reset-password", (req, res) => {
    const userEmail = req.body.email;
    // 检查邮箱是否存在于数据库中
    // 假设 findUserByEmail 是一个返回 Promise 的函数
    User.findOne({ email: userEmail }).then(user => {
        if (!user) {
            return res.status(404).send('用户不存在');
        }

    
        // 生成重置令牌
        const { token, timestamp } = generateToken(userEmail);
        const tokenWithTimestamp = `${token}-${timestamp}`;
        const baseUrl = 'https://partner-system.onrender.com';
   
        // 构建重置链接
        const resetLink = `${baseUrl}/reset-password/${tokenWithTimestamp}/${encodeURIComponent(userEmail)}`;

        // 发送邮件
        const htmlContent = `
        <p>Please click link below</p >
        <p><a href="${resetLink} ">reset password</a > </p >
        `

        mg.messages.create('dmabc.space', {
            from: "Partner-System-2.0 <mailgun@dmabc.space>",
            to: userEmail,
            subject: 'Partner System Reset Password',
            html: htmlContent,
        }).then({ message: 'email has been sent to your google account' })
            .catch(err => { console.log(err) });
        res.status(200).send({ message: 'email has been sent to your google account' });
    }).catch(error => {
        res.status(500).send('服务器错误');
    });


})


router.post("/reset-password/:token", async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword,email} = req.body;
       
        // 从令牌中提取时间戳和用户ID（邮箱）
        const parts = token.split('-');
        const originalTimestamp = parts.pop();
        const tokenWithoutTimestamp = parts.join('-');
        const tokenWithTimestamp = `${tokenWithoutTimestamp}-${originalTimestamp}`;

        // 验证令牌
        if (!verifyToken(email, tokenWithTimestamp)) {
            return res.status(400).send('无效的或过期的令牌');
        }
        // 查找用户
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send('用户不存在');
        }

        bcrypt.genSalt(10, async (err, salt) => {
            if (err) {
                console.error(err);
                return res.status(500).send('服务器错误');
            }
        
            bcrypt.hash(newPassword, salt, async (err, hashedPassword) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('服务器错误');
                }
        
                user.password = hashedPassword;
        
                try {
                    await user.save();
                    res.status(200).json({ user, message: "密码重置成功" });
                } catch (saveError) {
                    console.error(saveError);
                    res.status(500).send('服务器错误');
                }
            });
        });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).send('服务器错误');
        }
    }
});


// &route get api/users
// get user for super-admin
// @access private

router.get("/", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.find({ identity: { $ne: "Super-Admin" } }, 'email cluster identity name')
            .then((users) => {
                res.json(users);
            })
            .catch(err => res.status(500).json({ error: "error fetching users" }))
    })

// &route get api/users/edit-user/password   
// $edit password for yourself
// @access private

router.post("/edit-user/password", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { newPassword } = req.body;
        const userId = req.user.id;

        // no need to verify old password ，encode new password and save
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newPassword, salt, (err, hash) => {
                if (err) throw err;

                User.findByIdAndUpdate(userId, { password: hash })
                    .then(() => res.status(200).json({ message: "Password updated successfully" }))
                    .catch(error => res.status(500).json({ message: { error: "error occured " } }));
            });
        });
    });

// &route get api/users/delete/user  
// $delete user under super-admin
// @access private

router.delete("/delete/user", passport.authenticate("jwt", { session: false }), (req, res) => {

    //lack authenticate control function

    const email = req.body.email;
    User.findOneAndRemove({ email })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            res.status(200).json({ success: true, message: "delete user successful" });
        })
        .catch(err => res.status(500).json({ error: "Error deleting user" }));
});

// &route get api/users/edit/role
// $edit user role for super-admin 
// @access private

router.put("/edit/role", passport.authenticate("jwt", { session: false }), (req, res) => {

    // lack authenticate control function

    const email = req.body.email;
    const updatedUserRole = req.body.updatedUserRole;

    User.findOneAndUpdate({ email }, { identity: updatedUserRole }, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            res.status(200).json({ success: true, message: "user role update success", user });
        })
        .catch(err => res.status(500).json({ error: "Error updating user" }));
});

// $route get api/users/login
// @desc return token jwt 
// @ access public

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: "user not exist" })
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const rule = {
                            id: user.id,
                            name: user.name,
                            identity: user.identity,
                        };

                        jwt.sign(rule, keys.secretOrKey, { expiresIn: 600000 }, (err, token) => {
                            if (err) throw err
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            })
                        })
                        //res.json({msg:"password correct"})
                    } else {
                        return res.status(400).json({ message: "wrong password" })
                    }
                })
        })
})


router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {

    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        identity: req.user.identity
    })
})


module.exports = router;

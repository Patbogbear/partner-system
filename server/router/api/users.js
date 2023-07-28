//login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const keys = require("../../../config/keys")
const passport = require("passport")

const User = require("../../model/Users")

// $route get api/users/test
// @desc return require json data 
// @ access public

// router.get("/test",(req,res) => {
//     res.json({msg:"login works"})
// })

router.post("/register", (req, res) => {
    //console.log(req.body)

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ email: "email been used!" })
            } else {
                const newUser = new User({
                    name: req.body.name,
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
                            .then(user => res.json(user))
                            .catch(err = console.log(err));
                    });
                });

            }
        })
})
// $edit password for yourself
// 

router.post("/edit-user/password", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user.id;
        console.log(oldPassword)
        console.log(newPassword)
        // 首先验证旧密码是否正确
        User.findById(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }

                bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (!isMatch) {
                        return res.status(400).json({ error: "Incorrect old password" });
                    }

                    // 旧密码验证通过，对新密码进行加密并保存
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newPassword, salt, (err, hash) => {
                            if (err) throw err;

                            User.findByIdAndUpdate(userId, { password: hash })
                                .then(() => res.json({ message: "Password updated successfully" }))
                                .catch(err => console.log(err));
                        });
                    });
                });
            })
            .catch(err => console.log(err));
    });
// $delete user under super-admin

router.delete("/delete-user/:id", (req, res) => {

})
// $edit user role for admin 
router.post("/edit-user/:id", (req, res) => {

})

// $route get api/users/login
// @desc return token jwt 
// @ access public

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: "user not exist" })
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const rule = {
                            id: user.id,
                            name: user.name,
                            identity: user.identity
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
                        return res.status(400).json({ msg: "wrong password" })
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

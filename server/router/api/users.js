//login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const keys = require("../../../config/keys")
const passport = require("passport")

const User = require("../../model/Users")

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
                    cluster:req.body.cluster,
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
                            .then(user => res.status(200).json({user,message:"success"}))
                            .catch(err = console.log(err));
                    });
                });

            }
        })
})


// &route get api/users
// get user for super-admin
// @access private

router.get("/", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        User.find({ identity: { $ne: "Super-Admin" } }, 'email')
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
                    .catch(error => res.status(500).json({message:{error:"error occured "}}));
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
            res.status(200).json({ success: true,message:"delete user successful" });
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
    
    User.findOneAndUpdate({ email }, {identity:updatedUserRole}, { new: true })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            res.status(200).json({ success: true, message:"user role update success", user });
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

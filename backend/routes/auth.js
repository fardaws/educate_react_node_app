//import express 
const express = require('express');
//import bcrypt
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');
//register TL
router.post("/student/register", async (req, res) => {
    try { 
        console.log("here into register user");
        //generate crypted pwd
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //create new user
        const userObj = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: "student"
        });
        //save user and response
        const user = await userObj.save((err, result) => {
            if (result) {
                res.status(200).json({
                    message: "here user",
                    user: result
                })
            } else {
                if (err.keyValue.email) {
                    console.log("error in Backend : ", err.keyValue.email);
                    res.status(200).json({
                        message: 'this email is already exist!'
                    })
                } else if (err.keyValue.username) {
                    console.log("error in Backend : ", err.keyValue.username);
                    res.status(200).json({
                        message: 'this username is already taken!'
                    })
                }
            }
        });
        //return user 
        // res.status(200).json(user);

    } catch (error) {
        console.log("error : ", error);
    }
});
router.post("/teacher/register", async (req, res) => {
    try {
        console.log("here into register teacher");
        //generate crypted pwd
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //create new user
        const userObj = new User({
            username: req.body.username,
            email: req.body.email,
            cv: req.body.cv,
            password: hashedPassword,
            role: "teacher"
        });
            //save user and response
            const user = await userObj.save((err, result) => {
                if (result) {
                    res.status(200).json({
                        message: "here user",
                        user: result
                    })
                } else {
                    if (err.keyValue.email) {
                        console.log("error in Backend : ", err.keyValue.email);
                        res.status(200).json({
                            message: 'this email is already exist!'
                        })
                    } else if (err.keyValue.username) {
                        console.log("error in Backend : ", err.keyValue.username);
                        res.status(200).json({
                            message: 'this username is already taken!'
                        })
                    }
                }
            });
        //return user 
        // res.status(200).json(user);
    } catch (error) {
        console.log("error : ", error);
    }
});
//Login TL
router.post("/login", async (req, res) => {
    try {
        console.log("here into login");
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(200).json({
            message:"user not found!"
        });

        const validpassword = await bcrypt.compare(req.body.password, user.password);
        !validpassword && res.status(200).json({
            message:"password innvalid"
        });

        res.status(200).json({
            message:"here user", 
            user
        })
    } catch (error) {
        console.log("error :", error);
    }
})
module.exports = router; 

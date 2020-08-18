const express = require("express");
const router = express.Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const User = require("../models/user");
const Doctor = require("../models/doctor");
const async = require("async");
const bcrypt = require("bcryptjs");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// User Sign Up and Login
router.post("/register_user", (req, res, next) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) res.json({"error": "Error! Please Try Again"});
    if (doc) res.json({"error": "Username Alreday exists"});
    if (!doc) {
      User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) res.json({"error": "Error! Please Try Again"});
        if (doc) res.json({"error": "Email Already Exists"});
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const newUser = new User({
            firstname: req.body.firstname, 
            lastname: req.body.lastname,  
            username: req.body.username, 
            email: req.body.email,
            password: hashedPassword,
          });
          await newUser.save();
          req.login(newUser, function (err) {
            if (err) {
              res.status(400).send({ error: "Error in Logging In" });
            }
            req.session.user = req.user;
            res.locals.currentUser = req.user;
            const user = {
              id: req.user._id,
              username: req.user.username,
            };
            console.log(user);
            res.status(200).send({ user: user });
          });    
        }
      });   
    }
  });
});
router.post("/login_user", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.status(400).send({ error: "Error! Please Try Again" });
    if (!user) res.status(404).send({ error: "No User Exists" });
    if(user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) res.status(400).send({ error: "Error in Logging In" });
        if (result === true) {
          req.login(user, function (err) {
            if (err) {
              res.status(400).send({ error: "Error in Logging In" });
            }
            req.session.user = req.user;
            res.locals.currentUser = req.user;
            const user = {
              id: req.user._id,
              username: req.user.username,
            };
            res.status(200).send({ user: user });
          });
        } else {
          res.status(400).send({ error: "Incorrect Password" });
        }
      });
    }
  });
});

// Doctor Sign Up and Login
router.post("/register_doctor", (req, res, next) => {
  Doctor.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) res.json({ error: "Error! Please Try Again" });
    if (doc) res.json({ error: "Username Alreday exists" });
    if (!doc) {
      Doctor.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) res.json({ error: "Error! Please Try Again" });
        if (doc) res.json({ error: "Email Already Exists" });
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const newDoctor = new Doctor({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          });
          await newDoctor.save();
          req.login(newDoctor, function (err) {
            if (err) {
              res.status(400).send({ error: "Error in Logging In" });
            }
            req.session.user = req.user;
            res.locals.currentUser = req.user;
            const doctor = {
              id: req.user._id,
              username: req.user.username,
            };
            res.status(200).send({ doctor: doctor });
          });
        }
      });
    }
  });
});
router.post("/login_doctor", (req, res) => {
  Doctor.findOne({ email: req.body.email }, (err, doctor) => {
    if (err) res.status(400).send({ error: "Error! Please Try Again" });
    if (!doctor) res.status(404).send({ error: "User does not exist" });
    if (doctor) {
      bcrypt.compare(req.body.password, doctor.password, (err, result) => {
        if (err) res.status(400).send({ error: "Error in Logging In" });
        if (result === true) {
          req.login(doctor, function (err) {
            if (err) {
              res.status(400).send({ error: "Error in Logging In" });
            }
            req.session.user = req.user;
            res.locals.currentUser = req.user;
            const doctor = {
              id: req.user._id,
              username: req.user.username,
            };
            res.status(200).send({ doctor: doctor });
          });
        } else {
          res.status(400).send({ error: "Incorrect Password" });
        }
      });
    }
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.status(200).send({ success: "Success" });
});

// router.get("/user", (req, res) => {
//   if (res.locals.currentUser) {
//     const user = {
//       id: res.locals.currentUser._id,
//       username: res.locals.currentUser.username
//     }
//     console.log(user);
//     res.status(200).send({success: user});
//   } else {
//     res.send({error: "Not logged In"});
//   }
// });

module.exports = router;
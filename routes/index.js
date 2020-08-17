const express = require("express");
const router = express.Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const User = require("../models/user");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("register_user", (req, res) => {
    const newUser = new User({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email });
    User.register(newUser, req.body.password, (err, userAdded) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/home");
        });
      }
    });
    res.render("Register");
});

router.post("register_doctor", (req, res) => {
    const newUser = new User({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email });
    User.register(newUser, req.body.password, (err, userAdded) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/home");
        });
      }
    });
    res.render("Register");
});

module.exports = router;
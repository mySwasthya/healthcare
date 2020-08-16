// Require all of the modules u need
const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  flash = require("connect-flash"),
  session = require("express-session"),
  methodOverride = require("method-override"),
  logger = require("morgan"),
  request = require("request"),
  _ = require("lodash"),
  path = require("path");

const app = express();

// Default Values
const DEFAULT_PORT = 3001;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

// Setting up Database
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/healthcare';
mongoose.connect(databaseUri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(methodOverride('_method'));

app.use(logger("dev")); 
app.use(require("express-session")({
    secret: "Hello Guys!!! This is the Secret Key 1178435894837447",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

//Authentication 
app.use(passport.initialize());
app.use(passport.session());

//This middleware will make currentUser, flash success and error available to all templates
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.listen(DEFAULT_PORT, () => {
  console.log(`Listening on port: ${DEFAULT_PORT}`);
});
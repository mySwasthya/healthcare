// Require all of the modules u need
const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  bcrypt = require("bcryptjs"),
  flash = require("connect-flash"),
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  methodOverride = require("method-override"),
  logger = require("morgan"),
  request = require("request"),
  _ = require("lodash"),
  path = require("path"),
  User = require("./models/user"),
  Doctor = require("./models/doctor");

const app = express();

// Default Values
const DEFAULT_PORT = process.env.PORT || 3001;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

// Setting up Database
const databaseUri = process.env.MONGODB_URI || "mongodb://localhost/healthcare";
mongoose
  .connect(databaseUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Database connected`))
  .catch((err) => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname + "/public")));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(flash());

app.use(cors({
  origin: "http://localhost:3000",
  origin: "http://localhost:3002",
  credentials: true
}));

app.use(cookieParser("Secret Key"));
app.use(
  session({
    secret: "Secret Key",
    resave: false,
    saveUninitialized: false,
  })
);

//Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// passport.use(new LocalStrategy(Doctor.authenticate()));
// passport.serializeUser(Doctor.serializeUser());
// passport.deserializeUser(Doctor.deserializeUser());

//This middleware will make currentUser, flash success and error available to all templates
app.use(function (req, res, next) {
  // console.log("req.session", req.session);
  res.locals.currentUser = req.user;
  next();
});

//requiring routes
const indexRoutes = require("./routes/index");

//Routes
app.use("/", indexRoutes);

app.listen(DEFAULT_PORT, () => {
  console.log(`Listening on port: ${DEFAULT_PORT}`);
});

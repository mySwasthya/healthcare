var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstname: { type: String,  required: true },
    lastname: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String,  required: true }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Doctor", UserSchema);

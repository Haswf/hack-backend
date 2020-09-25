const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    identity: String,
},{versionKey: false});

const User = mongoose.model("user", userSchema, "user");
module.exports = User;

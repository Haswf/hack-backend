const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    identity: String,
    sentReq: Array,
    receiveReq: Array,
    orderList: Array,
    orderHistory: Array
},{versionKey: false});

const user = mongoose.model("user", userSchema, "user");
module.exports = user;

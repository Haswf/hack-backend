const mongoose = require("mongoose");

const DoctorScheme = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    introduction: String,
    username: String,
    contact_information:String,
    image: String
},{versionKey: false});

const Doctor = mongoose.model("doctor", DoctorScheme, "doctor");
module.exports = Doctor;

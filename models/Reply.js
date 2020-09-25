const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReplyScheme = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String
    }
},{
    versionKey: false,
    timestamps: true});

const Reply = mongoose.model("reply", ReplyScheme, "reply");
module.exports = Reply;

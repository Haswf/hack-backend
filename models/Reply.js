const mongoose = require("mongoose");

const ReplyScheme = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
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

const mongoose = require("mongoose");

const DiscussionScheme = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    replies: {
        type: [{
            type: Schema.ObjectId,
            ref: 'Reply'
        }],
    }}
    ,{
        versionKey: false,
        timestamps: true
});


const Discussion = mongoose.model("discussion", DiscussionScheme, "discussion");
module.exports = Discussion;

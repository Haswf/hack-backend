const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscussionScheme = new mongoose.Schema({
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

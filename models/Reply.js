const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReplyScheme = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: "Reply"
    },
    discussionId: {
        type: Schema.Types.ObjectId,
        ref: "Discussion"
    }
},{
    versionKey: false,
    timestamps: true});

ReplyScheme.index({'$**': 'text'});

ReplyScheme.pre('find', function () {
    this.populate('user', 'username');
});

const Reply = mongoose.model("Reply", ReplyScheme, "reply");
module.exports = Reply;

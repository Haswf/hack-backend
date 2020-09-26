const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscussionScheme = new mongoose.Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    surveyResultId: {
        type: Schema.Types.ObjectId,
        ref: "SurveyResult",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    replies: {
        type: [{
            type: Schema.ObjectId,
            ref: 'Reply'
        }],
    }}
    ,{
        timestamps: true
});

DiscussionScheme.pre('find', function () {
    this.populate('author', 'username');
    this.populate('replies');
});

const Discussion = mongoose.model("discussion", DiscussionScheme, "discussion");
module.exports = Discussion;

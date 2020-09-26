const mongoose = require("mongoose");
const { Schema } = mongoose;

const SurveyResultScheme = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    contact: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    symptoms: {
        type: [{
            type: Schema.ObjectId,
            ref: 'Symptom'
        }],
    }
}
    ,{
        timestamps: true
});

const SurveyResult = mongoose.model("surveyResult", SurveyResultScheme, "surveyResult");
module.exports = SurveyResult;

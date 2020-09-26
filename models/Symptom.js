const mongoose = require("mongoose");
const { Schema } = mongoose;

const SymptomScheme = new mongoose.Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        index: true,
        unique: true
    },
    description: {
        type: String
    }
}
    ,{
        timestamps: true
});

const Symptom = mongoose.model("Symptom", SymptomScheme, "symptom");
module.exports = Symptom;

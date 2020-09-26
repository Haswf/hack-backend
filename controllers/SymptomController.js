const Symptom = require("../models/Symptom")

exports.createSymptom = async (req, res) => {
    try {
        let symptom = new Symptom();
        symptom.name = req.body.name;
        symptom.description = req.body.description;
        symptom.createdBy = req.user;
        symptom.save();

        return res.status(201).json({
            status: 'success',
            data: {
                symptom
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: 'Failed to create a symptom'
        });
    }
};


exports.getAllSymptoms =  async (req, res) => {
    try {
        const symptoms = await Symptom.find();

        return res.status(200).json({
            status: 'success',
            data: {
                symptoms
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getOneSymptom = async (req, res) => {
    try {
        const symptom = await Symptom.findOne({_id: req.params.id});
        return res.status(200).json({
            status: 'success',
            data: symptom
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOneSymptom = async (req, res) => {
    try {
        await Symptom.deleteOne({_id: req.params.id, user: req.user});
        return res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
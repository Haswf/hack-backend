const SurveyResult = require("../models/SurveyResult")

exports.submitSurveyResult = async (req, res) => {
    try {
        let result = new SurveyResult();
        result.user = req.user;
        result.age = parseInt(req.body.age);
        result.gender = req.body.gender;
        result.city = req.body.city;
        result.contact = req.body.contact;
        result.description = req.body.description;
        result.symptoms =  req.body.symptoms;

        await result.save();

        return res.status(201).json({
            status: 'success',
            data: {
                result
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: err
        });
    }
};


exports.getAllSurveyResults =  async (req, res) => {
    try {
        const surveyResults = await SurveyResult.find();

        return res.status(200).json({
            status: 'success',
            data: {
                surveyResults
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getOneSurveyResult = async (req, res) => {
    try {
        const surveyResult = await SurveyResult.findOne({_id: req.params.id}).populate("symptoms");
        return res.status(200).json({
            status: 'success',
            data: surveyResult
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOneResult= async (req, res) => {
    try {
        await SurveyResult.deleteOne({_id: req.params.id, user: req.user});
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
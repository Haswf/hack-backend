const express = require('express');
const SurveyResultController = require('../controllers/SurveyResultController');
const endpoints = require('../library/constant/endpoints');
const passport = require("../library/authentication/passport")

const router = express.Router();

router.get(endpoints.surveyResult.collections, SurveyResultController.getAllSurveyResults);

router.post(endpoints.surveyResult.collections, passport.authenticate('jwt', {session: false}), SurveyResultController.submitSurveyResult);

router.get(endpoints.surveyResult.single, SurveyResultController.getOneSurveyResult);

router.delete(endpoints.surveyResult.single, passport.authenticate('jwt', {session: false}), SurveyResultController.deleteOneResult);


module.exports = router;
const express = require('express');
const SymptomController = require('../controllers/SymptomController');
const endpoints = require('../library/constant/endpoints');
const passport = require("../library/authentication/passport")

const router = express.Router();

router.get(endpoints.symptom.collections, SymptomController.getAllSymptoms);

router.post(endpoints.symptom.collections, passport.authenticate('jwt', {session: false}), SymptomController.createSymptom);

router.get(endpoints.symptom.single, SymptomController.getOneSymptom);

router.delete(endpoints.symptom.single, passport.authenticate('jwt', {session: false}), SymptomController.deleteOneSymptom);


module.exports = router;
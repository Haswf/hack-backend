const express = require('express');
const endpoints = require('../library/constant/endpoints');
const UserController = require("../controllers/UserController");
const router = express.Router();
const check = require('express-validator');
const passport = require("../library/authentication/passport")

router.post(endpoints.user.collection, UserController.signup);

router.get(endpoints.user.single, passport.authenticate('jwt', {session: false}), UserController.getOneUser);

router.delete(endpoints.user.single, passport.authenticate('jwt', {session: false}), UserController.delete);

router.post(endpoints.user.reset, passport.authenticate('jwt', {session: false}), UserController.resetPassword);

module.exports = router;

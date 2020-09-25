const express = require('express');
const endpoints = require('../library/constant/endpoints');
const AuthController = require("../controllers/AuthController");
const router = express.Router();
const check = require('express-validator');

router.post(endpoints.auth.login, [
    check.query('email').isEmail().normalizeEmail(),
    check.query("password").isString()
], AuthController.login);

module.exports = router;
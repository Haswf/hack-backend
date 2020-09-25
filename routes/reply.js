const express = require('express');
const ReplyController = require('../controllers/ReplyController');
const endpoints = require('../library/constant/endpoints');
const passport = require("../library/authentication/passport")

const router = express.Router();

router.get(endpoints.reply.collection, ReplyController.getAllReplies);

router.post(endpoints.reply.collection, passport.authenticate('jwt', {session: false}), ReplyController.createReply);

router.get(endpoints.reply.single, ReplyController.getOneReply);

router.delete(endpoints.reply.single, passport.authenticate('jwt', {session: false}), ReplyController.deleteOneReply);


module.exports = router;
const express = require('express');
const DiscussionController = require('../controllers/DiscussionController');
const endpoints = require('../library/constant/endpoints');
const passport = require("../library/authentication/passport")
const router = express.Router();

router.get(endpoints.discussion.collection, DiscussionController.getAllDiscussion);

router.post(endpoints.discussion.collection, passport.authenticate('jwt', {session: false}), DiscussionController.createDiscussion);

router.get(endpoints.discussion.single, DiscussionController.getOneDiscussion);

router.delete(endpoints.discussion.single, passport.authenticate('jwt', {session: false}), DiscussionController.deleteOneDiscussion);

module.exports = router;
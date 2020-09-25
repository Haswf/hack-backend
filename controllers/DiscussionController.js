const Discussion = require('../models/Discussion');
const Reply = require("../models/Reply")
const {check, validationResult} = require('express-validator');


exports.createDiscussion = async (req, res) => {
    let reply = new Reply();
    let discussion = new Discussion();
    discussion = await discussion.save();

    reply.user = req.user;
    reply.message = req.body.message;
    reply.parentId = null;
    reply.discussionId = discussion;
    reply = await reply.save();

    discussion.author = req.user;
    discussion.replies.push(reply);
    discussion = await discussion.save();

    try {
        discussion.save()
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: err
        });
    }
    return res.status(200).json({
        status: 'success',
        message: null,
        data: discussion
    });

};


exports.getAllDiscussion = async (req, res) => {
    try {
        const discussions = await Discussion.find()
        return res.status(200).json({
            status: 'success',
            data: {
                discussions
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOneDiscussion = async (req, res) => {
    try {
        // const discuss = await Discussion.findOne();
        Discussion.deleteOne({_id: req.params.id, author: req.user})
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

exports.getOneDiscussion = async (req, res) => {
    try {
        const discuss = await Discussion.findOne({_id: req.params.id}).populate("replies");
        return res.status(200).json({
            status: 'success',
            data: discuss
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOneDiscussion = async (req, res) => {
    try {
        // const discuss = await Discussion.findOne();
        Reply.deleteOne({_id: req.params.id})
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

const Discussion = require('../models/Discussion');
const Reply = require("../models/Reply")
const {check, validationResult} = require('express-validator');


exports.createDiscussion = async (req, res) => {
    let reply = new Reply();
    reply.user = req.user;
    reply.message = req.body.message;
    reply.save();

    let discussion = new Discussion();
    discussion.author = req.user;
    discussion.replies.push(reply);
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
        const discussionArray = await Discussion.find()
        return res.status(200).json({
            status: 'success',
            data: {
                discussionArray
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
        Discussion.deleteOne({_id: req.params.id})
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
        const discuss = await Discussion.findOne({_id: req.params.id});
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

const Reply = require('../models/Reply');
const Discussion = require("../models/Discussion")

exports.createReply = async (req, res) => {
    try {
        let reply = new Reply();
        reply.message = req.body.message;
        reply.user = req.user;
        reply.parentId = req.body.parentId;
        reply = await reply.save();
        const discussion = await Discussion.findOne({_id: req.body.discussionId})
        discussion.replies.push(reply);
        discussion.save();

        return res.status(201).json({
            status: 'success',
            data: {
                reply
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: 'Failed to create a comment'
        });
    }
};


exports.getAllReplies =  async (req, res) => {
    try {
        const replies = await Reply.find();

        return res.status(200).json({
            status: 'success',
            data: {
                replies
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getOneReply = async (req, res) => {
    try {
        const reply = await Reply.findOne({_id: req.params.id});
        return res.status(200).json({
            status: 'success',
            data: reply
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOneReply = async (req, res) => {
    try {
        await Reply.deleteOne({_id: req.params.id, user: req.user});
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
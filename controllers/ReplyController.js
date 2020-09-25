const Reply = require('../models/Reply');

exports.createReply = async (req, res) => {
    try {
        const reply = new Reply();
        reply.message = req.body.message;
        reply.user = req.user;
        reply.save();

        return res.status(201).json({
            status: 'success',
            data: {
                reply
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: 'Failed to create the subject'
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
        await Reply.delete({_id: req.params.id});
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
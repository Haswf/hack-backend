const Reply = require('../models/Reply');
const Discussion = require("../models/Discussion")

exports.search = async (req, res) => {
    try {
        const page = req.query.page? parseInt(req.query.page):0
        const limit = req.query.limit? parseInt(req.query.limit):10

        let replies = await Reply.find({$text: {$search: req.query.query}});
        const discussionIds = replies.map(e => e.discussionId)
        const discussions = await Discussion.find({
            '_id': { $in: discussionIds }
        }).skip(page*limit).limit(limit).sort({
            _id: 'asc'
        });
        return res.status(200).json({
            status: 'success',
            data: discussions

        });

    } catch (err) {
        return res.status(500).json({
            status: 'fail',
            message: err
        });
    }
};
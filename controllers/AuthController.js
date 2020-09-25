const {validationResult} = require('express-validator');
const passport = require("../library/authentication/passport");
const jsonwebtoken = require("jsonwebtoken");
const config = require("config");
module.exports = {
    /**
     * Route handler for login request
     * @param req
     * @param res
     * @param next
     */
    login: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }
        passport.authenticate('login', {session: false}, async (err, user, info) => {
            if (err) {
                logger.error(err);
                return next(err.message);
            }
            if (!user) {
                return res.status(404).json({
                    status: "fail",
                    data: null, msg: info.message
                });
            }
            // Only save username and email in payload
            let payload = {
                username: user.username,
                email: user.email,
            };
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jsonwebtoken.sign(payload, config.get("JWT.key"), {expiresIn: config.get("expiresIn")});
            let {password, ...returnInfo} = user.toJSON();
            return res.status(200).json({
                status: "success",
                message: "Sign-in succeeded",
                data: {user: {...returnInfo}, token}
            });
        })(req, res);
    }
}
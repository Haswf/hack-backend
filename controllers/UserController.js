const passport = require("../library/authentication/passport");


const User = require("../models/User");
const {check, validationResult} = require('express-validator');

module.exports = {

    /**
     * Route handler for signup request
     * @param req
     * @param res
     * @param next
     */
    signup: (req, res, next) => {
        passport.authenticate('signup', {session: false}, (err, user, info) => {
            if (err) {
                logger.error(err);
                res.status(500).json({
                    status: "fail",
                    data: null,
                    message: err.message
                });
            } else if (!user) {
                res.status(400).json({
                    status: "fail",
                    data: null,
                    message: info.message
                });
            } else {
                res.status(201).json( {
                    status: "success",
                    data: user,
                    message: "sign-up succeed"
                });
            }
        })(req, res)
    },


    getOneUser: async (req, res, next) => {
        try {
            const user = await User.find({_id: req.params.id});
            return res.status(200).json({
                status: "success",
                message: null,
                data: user
            })

        } catch (error) {
            res.status(500).json({
                status: "fail",
                data: null,
                message: error.message
            });
        }
    },


    /**
     * Delete an account. The selected account will be marked as deleted in MongoDB
     * @param req
     * @param res
     * @param next
     */
    delete: async (req, res, next) => {
        try {
            await User.delete({_id: req.user._id});
            return res.status(200).json({
                status: "success",
                message: "User Deleted",
                data: null
            })

        } catch (error) {
            res.status(500).json({
                status: "fail",
                data: null,
                message: error.message
            });
        }
    },

    /**
     * Reset password for the user.
     * @param req
     * @param res
     * @param next
     */
    resetPassword: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const user = req.user;
        let oldPassword = req.query.oldPassword;
        let newPassword = req.query.newPassword;

        try {
            // Check if the old password is correct
            let oldPasswordCheck = await user.isValidPassword(oldPassword);
            if (!oldPasswordCheck) {
                return res.status(401).json({message: "Unauthorised"});
            }
            // Check if the new password has the same hash output as the old one.
            let newPasswordCheck = await user.isValidPassword(newPassword);
            if (newPasswordCheck) {
                return res.status(400).json({message: "New password is identical to the old password"})
            }
            // Update password
            user.password = newPassword;
            await user.save();
            return res.status(200).json({message: "Password reset successful"});
        } catch (error) {
            logger.error(error);
            return next(error);
        }
    }
};
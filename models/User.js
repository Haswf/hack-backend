/**
 * User Model
 * @Author Haswell
 * @type {Mongoose}
 */
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            trim: true

        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
            // validate: value => {
            //     // Validate the strength of password
            //     if (!AuthTools.validatePasswordStrength(value)) {
            //         throw new Error('Password too weak')
            //     }
            // }
        },

        deleted: {
            type: Boolean,
            default: false
        },
    },
    // this feature will automatically set createdAt and updatedAt
    {timestamps: true}
);

/**
 * Pre-create hook to hash password
 * This method will generate the hash of password before add record to database
 */
userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 1);
    }
    next();
});


/**
 * Find a user by email
 * @param email
 * @param callback
 * @returns {void|mongoose.Schema.statics}
 */
userSchema.statics.findByEmail = function (email, callback) {
    return this.findOne({email: email}, callback);
};

/**
 * Find a user by username
 * @param username
 * @param callback
 * @returns {void|mongoose.Schema.statics}
 */
userSchema.statics.findByUserName = function (username, callback) {
    return this.findOne({username: username}, callback);
};

userSchema.statics.findActiveUserByEmail = function (email, callback) {
    return this.findOne({email: email, deleted: false}, callback);
};

userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    try {
        //Hashes the password sent by the user for login and checks if the hashed password stored in the
        //database matches the one sent. Returns true if it does else false.
        return await bcrypt.compare(password, user.password);
    } catch (error) {
        logger.error(error);
        return false
    }
};

let User = mongoose.model('User', userSchema);
module.exports = User;



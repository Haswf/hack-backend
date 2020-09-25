const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require("../../models/User");
const config = require("config");

passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.get("JWT.key"),
        issuer: '',
        audience: ''
    },
    async (jwtPayload, cb) => {
        try {
            // Validate if user account is active
            user = await User.findActiveUserByEmail(jwtPayload.email);
            if (!user) {
                return cb(null, false, {message: "User Not Found"});
            }
            return cb(null, user);
        } catch (error) {
            cb(error, null);
        }
    }
));
passport.use('login', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
    },
    async function (req, username, password, done) {
        try {
            const user = await User.findActiveUserByEmail(username);
            if (!user) {
                // err, user, info
                return done(null, false, {message: "User Not Found"});
            }
            let validate = await user.isValidPassword(password);
            if (!validate) {
                return done(null, false, {message: "Incorrect Password"});
            }
            return done(null, user, {message: "SignIn Successful"});
        } catch (error) {
            return done(error, false, {message: "SignIn Failed"});
        }
    }
));


passport.use('signup', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email',
        passwordField: 'password',
    },
    function (req, email, password, done) {
        createUser = async () => {
            try {
                let user = await User.findOne({email: req.query.email});
                if (user) {
                    return done(null, false, {message: "Email already in use"});
                } else {
                    let newUser = new User();
                    newUser.email = req.query.email;
                    newUser.username = req.query.username;
                    newUser.password = password;
                    newUser.favourites = [];
                    await newUser.save();
                    return done(null, newUser, {message: "New User successfully registered"});
                }
            } catch (error) {
                return done(error, false, {message: "Sign up Failed"});
            }
        };
        process.nextTick(createUser);
    })
);


module.exports = passport;


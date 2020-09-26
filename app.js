const createError = require('http-errors');
const express = require('express');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require("./library/authentication/passport");
const mongoose = require("./library/mongoose");
const flash = require('connect-flash');
const userRouter = require("./routes/user")
const discussionRouter = require("./routes/discussion")
const authRouter = require("./routes/auth")
const replyRouter = require("./routes/reply")
const bodyParser = require('body-parser');
const searchRouter =  require("./routes/search");
const symptomRouter =  require("./routes/symptom");
const surveyResultsRouter =  require("./routes/SurveyResult");
mongoose.connect("mongodb://comp30022:renlord@haswf.com:37017/?authSource=eportfolio-dev&readPreference=primary&appname=MongoDB%20Compass&ssl=false");
const app = express();
// Allows CORS in development
app.use(cors());


// Load middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(flash());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', discussionRouter);
app.use('/', replyRouter);
app.use('/', userRouter);
app.use('/', authRouter);
app.use('/', searchRouter);
app.use('/', symptomRouter);
app.use('/', surveyResultsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(500).json(err.message);
});

module.exports = app;
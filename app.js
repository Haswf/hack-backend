
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./mongoose");

const app = express();
const User = require("./models/User")
const cors = require('cors');
const prefix = "/api/"
app.use(cors());
// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json

app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get(prefix, (req, res) => {
  let user = new User();
  user.save();

});


mongoose.connect("mongodb://comp30022:renlord@haswf.com:37017/?authSource=eportfolio-dev&readPreference=primary&appname=MongoDB%20Compass&ssl=false");

const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});


const findCaregiverRouter = require("./routes/findCaregiverRouter");
const findPatientRouter = require("./routes/findPatientRouter");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const userRouter = require("./routes/userRouter");


// app.use(prefix + "findCaregiver", findCaregiverRouter);
// app.use(prefix + "findPatient", findPatientRouter);
// app.use(prefix + "login", loginRouter);
// app.use(prefix + "signup", signupRouter);
// app.use(prefix + "user", userRouter);


// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!");
});
module.exports = app;
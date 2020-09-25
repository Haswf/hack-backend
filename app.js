
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const cors = require('cors');

app.use(cors());
// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json

app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>app</H1>");
});


const findCaregiverRouter = require("./routes/findCaregiverRouter");
const findPatientRouter = require("./routes/findPatientRouter");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const userRouter = require("./routes/userRouter");

app.use("/findCaregiver", findCaregiverRouter);
app.use("/findPatient", findPatientRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/user", userRouter);


// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!");
});
module.exports = app;
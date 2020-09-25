require('dotenv').config()
const mongoose = require("mongoose");

// Connect to MongoDB
//
// CONNECTION_STRING = "mongodb+srv://ElliotXue:a123@cluster0-nxqvq.mongodb.net/test?retryWrites=true&w=majority";
// // MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);
// console.log(MONGO_URL);
//
// mongoose.connect("mongodb+srv://ElliotXue:a123@cluster0-nxqvq.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     dbName: "hack"
// });

// const db = mongoose.connection;
// db.on("error", err => {
//     console.error(err);
//     process.exit(1);
// });
//
// db.once("open", async () => {
//     console.log("here!!!!!!!!!!!!");
//     console.log("Mongo connection started on " + db.host + ":" + db.port);
// });
//
// require("./caregiver");
// require("./Patient");
// require("./user");
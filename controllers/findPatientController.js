// // import the findPatients model
// // i.e. provide the controller a link to the findPatients model
// const mongoose = require("mongoose");
// const Patient = mongoose.model("Patient");
// // function to handle a request to get all Nurse
//
// const getAllPatients = async (req, res) => {
//
//     try {
//         const all_patient = await Patient.find();
//         return res.send(all_patient);
//     } catch (err) {
//         res.status(400);
//         return res.send("Database query failed");
//     }
// };
//
// // function to handle a request to a particular Nurse
// /*const getNurseByName = (req, res) => {
//     // search for Nurse in the database via Name
//     const findNurse = findPatients.find(findNurse => findNurse.name === req.params.name);
//
//     if (findNurse) {
//         // send back the overview of the Nurse
//         res.send(findNurse.name + ": " + findNurse.introduction);
//     } else {
//         res.send("Not Found");
//     }
// };*/
//
// /*
// const getPatientByID = async (req, res) => {
//     const patientId = req.params.id;
//
//     try {
//         const patients = await Patient.find({id: patientId});
//         if (!patients) {
//             res.status(400);
//             console.log("Author not found");
//             return res.send("Author not found");
//         }
//
//         const patient = patients[0];
//         console.log("Author found!!!", patient);
//
//
//         return res.send(patient);
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
// };*/
// const getPatientByUsername = async (req, res) => {
//     const patientUsername = req.params.username;
//
//     try {
//         const patient = await Patient.findOne({username: patientUsername});
//         if (!patient) {
//             res.status(400);
//             console.log("Patient not found");
//             return res.send("Patient not found");
//         }
//         console.log("Patient found!!!", patient);
//         return res.send(patient);
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
// };
//
// // function to handle request to add Nurse
// const addPatient = async (req, res) => {
//     const new_patient = req.body;
//     const userName = req.body.username;
//     try {
//         const users = await Patient.findOne({username: userName});
//         if (!users) {
//             res.status(200);
//             console.log("Patient not found");
//             Patient.create(new_patient);
//             return res.send("post created");
//         }
//         else{
//             res.status(400);
//             return res.send("existed");
//         }
//
//
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
//
//     res.send("done");
// };
//
// // function to modify Nurse by ID
// const updatePatient = async (req, res) => {
//     const patientUsername = req.params.username;
//     const new_patient = req.body;
//     try {
//         const patient = await Patient.findOne({username: patientUsername});
//         if (!patient) {
//             res.status(400);
//             console.log("Patient not found");
//             return res.send("Patient not found");
//         }
//
//         console.log("Patient found!!!", patient);
//         if(new_patient["first_name"]){
//             patient["first_name"] = new_patient["first_name"];
//         }
//         if(new_patient["last_name"]){
//             patient["last_name"] = new_patient["last_name"];
//         }
//         if(new_patient["gender"]){
//             patient["gender"] = new_patient["gender"];
//         }
//         if(new_patient["introduction"]){
//             patient["introduction"] = new_patient["introduction"];
//         }
//         if(new_patient["age"]){
//             patient["age"] = new_patient["age"];
//         }
//         if(new_patient["address"]){
//             patient["address"] = new_patient["address"];
//         }
//         if(new_patient["contact_information"]){
//             patient["contact_information"] = new_patient["contact_information"];
//         }
//         await patient.save();
//         res.send(patient);
//
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
//
// };
//
// const deletePatient = (req, res) => {
//     // delete post in the database via ID
//     const deleted_username = req.params.username;
//     Patient.remove({username: deleted_username}, function(err, obj) {
//         if (err) throw err;
//     });
//     return res.send("deleted");
// };
//
// // remember to export the functions
// module.exports = {
//     getAllPatients,
//     getPatientByUsername,
//     addPatient,
//     updatePatient,
//     deletePatient
// };

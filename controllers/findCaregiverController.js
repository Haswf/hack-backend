// // import the findCaregivers model
// // i.e. provide the controller a link to the findCaregivers model
// require("../models")
// const mongoose = require("mongoose");
// const Caregiver = mongoose.model("caregiver");
// // function to handle a request to get all Nurse
// const getAllCaregivers = async (req, res) => {
//
//     try {
//         const all_caregiver = await Caregiver.find();
//         return res.send(all_caregiver);
//     } catch (err) {
//         res.status(400);
//         return res.send("Database query failed");
//     }
// };
//
// // function to handle a request to a particular Nurse
// /*const getNurseByName = (req, res) => {
//     // search for Nurse in the database via Name
//     const findNurse = findCaregivers.find(findNurse => findNurse.name === req.params.name);
//
//     if (findNurse) {
//         // send back the overview of the Nurse
//         res.send(findNurse.name + ": " + findNurse.introduction);
//     } else {
//         res.send("Not Found");
//     }
// };*/
// const getCaregiverByUsername = async (req, res) => {
//     const caregiverUsername = req.params.username;
//
//     try {
//         const caregivers = await Caregiver.find({username: caregiverUsername});
//         if (!caregivers) {
//             res.status(400);
//             console.log("Author not found");
//             return res.send("Author not found");
//         }
//         const caregiver = caregivers[0];
//         console.log("Author found!!!", caregiver);
//         return res.send(caregiver);
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
// };
//
// /*const getCaregiverByID = async (req, res) => {
//     const caregiverId = req.params.id;
//
//     try {
//         const caregivers = await Caregiver.find({id: caregiverId});
//         if (!caregivers) {
//             res.status(400);
//             console.log("Author not found");
//             return res.send("Author not found");
//         }
//
//         const caregiver = caregivers[0];
//         console.log("Author found!!!", caregiver);
//
//
//         return res.send(caregiver);
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
// };*/
//
//
// // function to handle request to add Nurse
// const addCaregiver = async (req, res) => {
//     const new_caregiver = req.body;
//     const userName = req.body.username;
//     try {
//         const users = await Caregiver.findOne({username: userName});
//         if (!users) {
//             res.status(200);
//             console.log("User not found");
//             if(!new_caregiver["rate"]){
//                 new_caregiver["rate"]=null;
//             }
//             if(!new_caregiver["rate_history"]){
//                 new_caregiver["rate_history"]=[];
//             }
//             if(!new_caregiver["comment"]){
//                 new_caregiver["comment"]=[];
//             }
//             Caregiver.create(new_caregiver);
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
//    /* const new_caregiver = req.body;
//     Caregiver.create(new_caregiver);*/
//     res.send("done");
// };
//
// // function to modify Nurse by username
// const updateCaregiver = async (req, res) => {
//     const caregiverUsername = req.params.username;
//     const new_caregiver = req.body;
//     try {
//         const caregivers = await Caregiver.find({username: caregiverUsername});
//         if (!caregivers) {
//             res.status(400);
//             console.log("Author not found");
//             return res.send("Author not found");
//         }
//
//         const caregiver = caregivers[0];
//         console.log("Author found!!!", caregiver);
//         if(new_caregiver["first_name"]){
//             caregiver["first_name"] = new_caregiver["first_name"];
//         }
//         if(new_caregiver["last_name"]){
//             caregiver["last_name"] = new_caregiver["last_name"];
//         }
//         if(new_caregiver["gender"]){
//             caregiver["gender"] = new_caregiver["gender"];
//         }
//         if(new_caregiver["introduction"]){
//             caregiver["introduction"] = new_caregiver["introduction"];
//         }
//         if(new_caregiver["age"]){
//             caregiver["age"] = new_caregiver["age"];
//         }
//         if(new_caregiver["address"]){
//             caregiver["address"] = new_caregiver["address"];
//         }
//         if(new_caregiver["salary"]){
//             caregiver["salary"] = new_caregiver["salary"];
//         }
//         if(new_caregiver["working_experience"]){
//             caregiver["working_experience"] = new_caregiver["working_experience"];
//         }
//         if(new_caregiver["contact_information"]){
//             caregiver["contact_information"] = new_caregiver["contact_information"];
//         }
//         if(new_caregiver["comment"]) {
//             caregiver["comment"].push(new_caregiver["comment"]);
//         }
//         if(new_caregiver["image"]){
//             caregiver["image"] = new_caregiver["image"];
//         }
//         await caregiver.save();
//         res.send(caregiver);
//
//     } catch (err) {
//         res.status(400);
//         console.log(err);
//         return res.send("Database query failed");
//     }
//
// };
//
// const deleteCaregiver = (req, res) => {
//     // delete post in the database via ID
//     const deleted_username = req.params.username;
//     Caregiver.remove({username: deleted_username}, function(err, obj) {
//         if (err) throw err;
//     });
//     return res.send("deleted");
// };
//
// // remember to export the functions
// module.exports = {
//     getAllCaregivers,
//     addCaregiver,
//     updateCaregiver,
//     deleteCaregiver,
//     getCaregiverByUsername
// };

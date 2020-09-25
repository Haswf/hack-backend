const express = require("express");

// create router
const findCaregiverRouter = express.Router();

// load/import the findNurse controller
const findCaregiverController = require("../controllers/findCaregiverController.js");

// handle the GET request on root of the findNurse path
// i.e. get all Nurse
findCaregiverRouter.get("/", findCaregiverController.getAllCaregivers);

// handle the GET request to get a Nurse by Name
//findCaregiverRouter.get("/:name", findCaregiverController.getNurseByName);

// handle the GET request to get a Nurse by ID
findCaregiverRouter.get("/:username", findCaregiverController.getCaregiverByUsername);



// handle the POST request to add a Nurse
findCaregiverRouter.post("/", findCaregiverController.addCaregiver);

// handle the POST request to update a Nurse
findCaregiverRouter.post("/:username", findCaregiverController.updateCaregiver);

//handle the DELETE request to delete a post
findCaregiverRouter.delete("/:username", findCaregiverController.deleteCaregiver);

// export the router
module.exports = findCaregiverRouter;
var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController.js");
/* GET users listing. */
router.get('/', userController.getAllUsers);

router.post('/:name', userController.updateUser);
/* GET users by username. */
router.get('/:name', userController.getUserByName);

module.exports = router;
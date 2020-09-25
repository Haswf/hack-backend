const express = require('express');
const SearchController = require('../controllers/SearchController');
const endpoints = require('../library/constant/endpoints');
const router = express.Router();

router.post(endpoints.search.search, SearchController.search);

module.exports = router;
const express = require('express');

const router = express.Router();
const addQuery = require('../../controllers/queryUsersController');

router.post("/", addQuery);

module.exports = router;
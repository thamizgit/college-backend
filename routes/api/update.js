const express = require('express');

const router = express.Router();
const updateUsers = require('../../controllers/updateUsersController');

router.post('/', updateUsers);

module.exports = router;
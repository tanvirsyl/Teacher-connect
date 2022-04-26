const express = require('express');
const { getUser } = require('../controller/user');

const router = express.Router();
router.get('/all-users',  getUser);

module.exports = router;
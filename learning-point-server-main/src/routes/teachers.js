const express = require('express');
const { getTeachers } = require('../controller/teachers');
const router = express.Router();

router.get('/all-teachers', getTeachers);

module.exports = router;
const express = require('express');
const { getStudents } = require('../controller/students');
const router = express.Router();

router.get('/all-students', getStudents);

module.exports = router;
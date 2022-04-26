const express = require('express');
const { meetInfo, getMeet } = require('../controller/meet');
const router = express.Router();

router.post('/meet',  meetInfo);
router.get('/meet-info',  getMeet);

module.exports = router;
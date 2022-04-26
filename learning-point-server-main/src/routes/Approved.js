const express = require('express');
const { approvedInfo, getApprovedId, deleteId } = require('../controller/Approved');
const router = express.Router();

router.post('/approved',  approvedInfo);
router.get('/approved-info',  getApprovedId);

module.exports = router;
const express = require('express');

const router = express.Router();
const apodCtrl = require('../../controllers/APOD');

router.get('/readAPODS', apodCtrl.readAPODS);
router.post('/putLikes', apodCtrl.putLikes);

module.exports = router;

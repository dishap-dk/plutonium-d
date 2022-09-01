const express = require('express');
const router = express.Router();

const cowinController=require('../controllers/cowinController')





router.get('/states',cowinController.districtId)


























module.exports = router;
const express = require('express');
const router = express.Router();
const cowinController=require('../controllers/cowinController')




router.get('/states',cowinController.states)
router.get('/getDistrictId/:stateId',cowinController.getDistrictId)
router.get('/getByPin',cowinController.getByPin)












module.exports = router;
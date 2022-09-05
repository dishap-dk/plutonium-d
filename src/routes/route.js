const express = require('express');
const router = express.Router();
const cowinController=require('../controllers/cowinController')




router.get('/states',cowinController.states)
router.get('/getDistrictId/:stateId',cowinController.getDistrictId)
router.get('/getByPin',cowinController.getByPin)
router.get('/getDistrictId',cowinController.getDistrict)
router.get('/weather',cowinController.getWeather)
router.get('/memes',cowinController.getAllMemes)
router.post('/memes1',cowinController.getMeme)
router.post('/citytemp',cowinController.getcitytemp)












module.exports = router;
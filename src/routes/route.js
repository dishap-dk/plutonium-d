const express = require('express');

const router = express.Router();

const userModel=require("../models/userModel")
const usercontroller=require("../controller/usercontroller")


router.post('/createUser',usercontroller.createUser)

router.get('/getUser',usercontroller.getUser)







     

 


module.exports = router;

// adding this comment for no reason
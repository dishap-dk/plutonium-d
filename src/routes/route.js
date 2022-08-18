const express = require('express');

const router = express.Router();

const userModel=require("../models/userModel")
const usercontroller=require("../controller/usercontroller")
 const bookModel=require("../models/bookModel")
 const bookcontroller=require("../controller/bookcontroller")

router.post('/createUser',usercontroller.createUser)

router.get('/getUser',usercontroller.getUser)

router.post('/createBook',bookcontroller.createBook)
router.get('/bookList',bookcontroller.bookList)
router.post('/getBooksInYear',bookcontroller.getBooksInYear)
router.get('/getXINRBooks',bookcontroller.getXINRBooks)
router.get('/getRandomBooks',bookcontroller.getRandomBooks)
router.post('/getParticularBooks',bookcontroller.getParticularBooks)










     

 


module.exports = router;

// adding this comment for no reason
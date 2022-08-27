const express = require('express');

const router = express.Router();


const bookcontroller3=require('../controller/bookcontroller3')
const authorcontroll=require('../controller/authorcontroll')
const publishercontroll=require('../controller/publishercontroll')

// const mid1=function(req,res,next){
//     let loggedIn=false
// if(loggedIn=true){
//     next()
// }else{
//     res.send("please login")
// }
// }

// const mid2=function(req,res,next){
//     console.log("hii, this mi2")
//     next()
// }

// const mid3=function(req,res,next){
//     let time=new Date()
  
//     console.log("hii, this mi2",time)
//     next()
// }




router.post('/createAuthor',authorcontroll.createAuthor)
router.post('/createPublisher',publishercontroll.createPublisher)
router.post('/createBook',bookcontroller3.createBook)
router.get('/getBook',bookcontroller3.getBook)
router.get('/getLinkedData', bookcontroller3.getLinkedData)
router.put('/apiBooks',bookcontroller3.apiBooks)


module.exports = router;

// adding this comment for no reason
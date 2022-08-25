const express = require('express');

const router = express.Router();


const bookcontroller3=require('../controller/bookcontroller3')
const authorcontroll=require('../controller/authorcontroll')
const publishercontroll=require('../controller/publishercontroll')


router.post('/createAuthor',authorcontroll.createAuthor)
router.post('/createPublisher',publishercontroll.createPublisher)
router.post('/createBook',bookcontroller3.createBook)
router.get('/getBook',bookcontroller3.getBook)
router.get('/getLinkedData',bookcontroller3.getLinkedData)
router.put('/apiBooks',bookcontroller3.apiBooks)


module.exports = router;

// adding this comment for no reason
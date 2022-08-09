const express = require('express');
const lodash=require('lodash')
const abc = require('../introduction/intro')
const logg=require('../logger/logger')
const show=require('../validator/formatter')
const dates=require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    abc.printName
    logg.func1
    show.trim1
    show.lower1
    show.upcase1
    dates.print1
    dates.BatchInfo1
    dates.month

    let month=["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
    console.log(lodash.chunk(month,3))
     let arr=[1,3,5,7,9,11,13,15,17,19]
     console.log(lodash.tail(arr))
     let m=[1,2,3]
     let n=[2,3,4]
     let o=[3,4,5]
     let p=[4,5,6]
     let q=[5,6,7]
     console.log(lodash.union(m,n,o,p,q))
     let movies = [["horror","The Shining"],["drama","Titanic"], ["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     console.log(lodash.fromPairs(movies))

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})
router.get('/movies', function(req, res){
    let mov=["don","kabir","kashmir files"]
    res.send(mov)
})
// router.get('/movies/:indexNumber', function(req, res){
//     res.send('This is the second routes implementation')
// })
router.get('/films', function(req, res){
    let obj=[{"id":1 , "name":"don"},
{"id":2,"name":"the kashmir files"},
{"id":3,"name":"harry potter"}]
res.send(obj)
})

router.get('/movies/:indexNumber',function(req,res){
    let films=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let Rparam=req.params.indexNumber
    console.log(films[Rparam])
    res.send(films[Rparam])
    res.send(Rparam[indexNumber])
})


router.get('/give-me-students-data',function(req, res){

})
module.exports = router;

// adding this comment for no reason
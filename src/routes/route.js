const express = require('express');

const router = express.Router();



router.get("/test",function(req,res){
    
let arr=[1,2,3,5,6]
let total=0
for(let i = 0; i <arr.length;i++){
 total=total+arr[i]

}
let last=arr[4]
let box=last*(last+1)/2
let final=box-total;
// console.log(final)
  res.send({final});
});




router.get("/test-yes",function(req,res){

   let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send(  { data: missingNumber  }  );
 });

 router.post("/test-post",function(req,res){
let boddy=req.body
 res.send(boddy)
 })

 router.post("/disha",function(req,res){

let view=req.body
  console.log(view)
  res.send(view)
     })
 


module.exports = router;

// adding this comment for no reason
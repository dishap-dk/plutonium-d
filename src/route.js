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
   for (let i=0;i<len;i++){
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send(  { data: missingNumber  }  );
 });

 


 let players =[
{
  "name":"manish",
  "dob":"1/1/1995",
  "gender":"male",
  "city":"jalandar",
  "sports":["swimming"],
},
{
  "name":"gopal",
  "dob":"1/09/1995",
  "gender":"male",
  "city":"delhi",
  "sports":["soccer"],
},
{
  "name":"lokesh",
  "dob":"1/1/1990",
  "gender":"male",
  "city":"mumbai",
  "sports":["soccer"]
}
]
router.post("/players",function(req,res){

  let newplayer=req.body;
  let newPlayerName=newplayer.name;
  let oneflag=false;

  for(let i=0;i<players.length;i++){
    if(players[i].name==newPlayerName){
      oneflag=true;
     break 
    }
  }

if(oneflag){
  res.send("player already exist")
}else{
players.push(newplayer)
res.send(players)

}
})





     

 


module.exports = router;

// adding this comment for no reason
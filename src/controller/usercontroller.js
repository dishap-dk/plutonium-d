
const userModel=require("../models/userModel")

let createUser= async function(req,res){
    let data=req.body
    let datasave= await userModel.create(data)
    res.send(datasave)
   } 


   let getUser =async function(req,res){
    let saved= await userModel.find()
    res.send({saved})
    
}
    
module.exports.createUser=createUser    
module.exports.getUser=getUser    
    
    



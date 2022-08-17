const bookModel2=require("../models/bookModel2.js")

const createBook=async function(req,res){
    const entry=req.body
    const entryData=await bookModel2.create(entry)
    res.send({msg:entryData})
}
















module.exports.createBook=createBook
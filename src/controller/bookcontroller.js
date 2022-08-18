const bookModel=require("../models/bookModel")
let createBook=async function(req,res){
let entry=req.body
let newEntry= await bookModel.create(entry)
res.send({msg:newEntry})
}



let bookList=async function(req,res){
let list=await bookModel.find().select({bookName:1 , authorName:1,_id:0})

res.send({msg:list})
}

let getBooksInYear=async function(req,res){
let input= req.body.year
let allyears=await bookModel.find({year :{$eq :input}})
res.send({ msg:allyears})



}
let getXINRBooks=async function(req,res){
    let Rupee=await bookModel.find({"Price.IndianPrice":{$in:["100","200","500"]}})
    res.send({msg:Rupee})


}

let getRandomBooks = async function(req,res){
    let random=await bookModel.find({$or:[{stockAvailable:true},{year:2017}]})
res.send({msg:random})
}


let getParticularBooks=async function(req,res){
let data=req.body
let show = await bookModel.find(data)
res.send({msg:show})

}



 module.exports.createBook=createBook
 module.exports.bookList=bookList
 module.exports.getBooksInYear=getBooksInYear
 module.exports.getXINRBooks=getXINRBooks
 module.exports.getRandomBooks=getRandomBooks
 module.exports.getParticularBooks=getParticularBooks

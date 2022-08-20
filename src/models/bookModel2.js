const mongoose = require('mongoose');

const BooksSchema=new mongoose.Schema({

   name:String,
   author_id:{
    type:Number,
    required:true
   },
   price:Number,
   ratings:String
},{timestamps:true});


module.exports=mongoose.model('newbook',BooksSchema)//newbooks


const mongoose=require('mongoose');
const myBookSchema=new mongoose.schema({
bookName:{
    type:String,
    require:true
},
price:{
    IndianPrice:String,
    europeanPrice:String
    
},
year:{
    type:String,
    default:2021
},
tags:[String],
authorName:String,
totalPages:String,
stockAvailable:Boolean
});

module.exports=mongoose.model('book',myBookSchema);
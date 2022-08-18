const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:String
    
    },{timestamps:true});

module.exports=mongoose.model('user',userSchema);//users




















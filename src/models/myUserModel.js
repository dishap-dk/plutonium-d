const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    
    firstname:String,
    lastname:String,
   
   mobile:Number,
    ratings:Number,

    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:["male","female"],
        isDeleted:Boolean,
        Default:false
    },
    age:Number,
    isDeleted:Boolean
});

  



module.exports=mongoose.model('alien',userSchema)
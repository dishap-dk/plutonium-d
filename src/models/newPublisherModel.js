const mongoose=require('mongoose')
const PublisherSchema=new mongoose.Schema({

name:String,
headQuater:String,

})

module.exports=mongoose.model('newPublisher',PublisherSchema)

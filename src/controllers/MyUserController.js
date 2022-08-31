const jwt = require('jsonwebtoken');
const myUserModel = require('../models/myUserModel')


// ---------------------------------creating  user-------------------------------------------------------

const CreateUser = async function (req, res) {
   
   try{
    let data = req.body
    if(!data){
        res.status(400).send({status:false,msg:"data is empty"})
    }
    let createUser = await myUserModel.create(data)
    res.status(201).send({ status: true, msg: createUser })
   }

   catch (err) {
    res.status(500).send({ error: err.message })
  }
};

// --------------------------------------------2 logging in the user second time-----------------------------------------

async function login(req, res) {
    try{

    let userId = req.body.emailId;
    let password = req.body.password;
    let confirm = await myUserModel.findOne({ emailId: userId, password: password });
    if (!confirm)
        return res.status(400).send({ status: false, msg: "wrong credentials" });
    
    
    // now user is being logged in now we will authenticate using jws
   
    let token = jwt.sign(
        {
            userId: confirm._id.toString(),
            name: "disha"
        },
        "hello guys this is my first jwt"
    );
    res.setHeader('x-auth-token', token);
    res.status(201).send({ status: true, token: token });
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}





//---------------------------------------- 3  getting individual data of user-----------------------------------

const user = async function (req, res) {
try{
    let userId = req.params.userId
    let userdetail = await myUserModel.findById(userId)
    if (!userdetail)
        return res.status(400).send({ status: false, msg: "wrong user" })
    res.status(201).send({ status: true, data: userdetail })
}


catch(err){
    res.status(500).send({error:err.message})
}
}


// user delete
let userDelete = async function (req, res) {

    try{
    let userid = req.params.userId
    let details = await myUserModel.findOneAndUpdate({ userid }, { isDeleted: true })
    if (!details)
        return res.status(400).send({ status: false, msg: "wrong details entrered" })

}catch(err){
    res.status(500).send({error:err.message})
}
}

//---------------------------------- put  last api for updation of data------------------------------------------


let updateData = async function (req, res) {
    try{

    let data = req.body
    let newuserid = (req.params.userId)
    let ConfirmId = await myUserModel.findOneAndUpdate({ _id: newuserid }, data, { new: true })
    res.send({ msg: ConfirmId })
    if (!ConfirmId)
        return res.send({ status: false, msg: "id not correct" })

}
catch(err){
    res.status(500).send({error:err.message})
}
}
// -------------------------------------------posting something in our wall---------------------------------------------
const postData=async function(req,res){
    try{
    let postDataCome=req.body.message
    let Userid=req.params.userId
    let user=await myUserModel.findById(Userid)
if(!user)
return res.status(400).send({status:false,msg:"wrong user"})
let updatedpost=user.post
updatedpost.push(postDataCome)
let updateduser=await myUserModel.findOneAndUpdate({_id:Userid},{post:updatedpost},{new:true})
res.status(201).send({status:true,msg:updateduser})
}
catch(err){
    res.status(500).send({error:err.message})
}
}




















module.exports.CreateUser = CreateUser
module.exports.login = login
module.exports.user = user
module.exports.userDelete = userDelete
module.exports.updateData = updateData
module.exports.postData = postData

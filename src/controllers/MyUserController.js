const jwt = require('jsonwebtoken');
const myUserModel = require('../models/myUserModel')


// creating  user

const CreateUser = async function (req, res) {
    let data = req.body
    let createUser = await myUserModel.create(data)
    res.send({ status: true, msg: createUser })
}




// 2 logging in the user second time

const login = async function (req, res) {
    let userId = req.body.emailId
    let password = req.body.password
    let confirm = await myUserModel.findOne({ emailId: userId, password: password })
    if (!confirm)
        return res.send({ status: false, msg: "wrong credentials" })

    // now user is being logged in now we will authenticate using jws

    let token = jwt.sign(
        {
            userId: confirm._id.toString(),
            name:"disha"
        },
        "hello guys this is my first jwt"
    );
    res.setHeader('x-auth-token', token);
    res.send({ status: true, token: token })
};






// 3  getting individual data of user

const user = async function (req, res) {

    let userId = req.params.userId
    let userdetail = await myUserModel.findById(userId)
    if (!userdetail)
        return res.send({ status: false, msg: "wrong user" })
    res.send({ status: true, data: userdetail })
}





// user delete
let userDelete = async function (req, res) {

    let userid = req.params.userId
    let details = await myUserModel.findOneAndUpdate({ userid }, { isDeleted: true })
    if (!details)
        return res.send({ status: false, msg: "wrong details entrered" })

}


// put  last api for updation of data


let updateData = async function (req, res) {

    let data = req.body
    let newuserid = (req.params.userId)
    let ConfirmId = await myUserModel.findOneAndUpdate({ _id: newuserid }, data, { new: true })
    res.send({ msg: ConfirmId })
    if (!ConfirmId)
        return res.send({ status: false, msg: "id not correct" })

}











module.exports.CreateUser = CreateUser
module.exports.login = login
module.exports.user = user
module.exports.userDelete = userDelete
module.exports.updateData = updateData

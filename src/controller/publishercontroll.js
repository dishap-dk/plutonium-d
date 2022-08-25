
const newPublisherModel = require("../models/newPublisherModel")
let createPublisher = async function (req, res) {


    let data1 = req.body
let savedData1=await newPublisherModel.create(data1)
    res.send({ msg: savedData1 })
}


module.exports.createPublisher = createPublisher
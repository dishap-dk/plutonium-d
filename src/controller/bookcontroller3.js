
const newBookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")
const newAuthorModel = require("../models/newAuthorModel")
// creating book

let createBook = async function (req, res) {
    let Data2 = req.body
    let savedData2 = await newBookModel.create(Data2)
    if (!Data2.author) {
        return res.send({ msg: "not available" })
    }
    let authId = await newAuthorModel.findById(Data2.author)
    if (!authId) {
        return res.send({ msg: "not aval" })
    }
    if (!Data2.publisher) {
        return res.send({ msg: "write publisherid" })
    }
    let publish = await newPublisherModel.findById(Data2.publisher)
    if (!publish) {
        res.send({ msg: "wrong" })
    }




    res.send(savedData2)
}


// get book data
let getBook = async function (req, res) {

    let data3 = await newBookModel.find()
    res.send({ msg: data3 })
}



// getting populate data
let getLinkedData = async function (req, res) {
    let Data4 = await newBookModel.find().populate('author').populate('publisher')
    res.send({ msg: Data4 })
}

// 

let apiBooks = async function (req, res) {

    let publish = await newPublisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })
    let p2 = publish.map(x => x._id)
    let updatecover = await newBookModel.updateMany({ publisher: p2 }, { isHardCover: true }, { new: true })
    let rating = await newAuthorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let r2 = rating.map(x => x._id)
    let updateRating = await newBookModel.updateMany({ author: r2 }, { $inc: { price: 10 } }, { new: true })

    res.send({ data: updateRating, updatecover })
}







module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.getLinkedData = getLinkedData
module.exports.apiBooks = apiBooks
// module.exports.newAuthorModel = newAuthorModel

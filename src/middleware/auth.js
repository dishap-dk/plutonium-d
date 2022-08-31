const jwt = require('jsonwebtoken');



let authentication=function(req,res,next){
let token = req.headers['x-auth-token'];
    if (!token)
        return res.send({ status: false, msg: "absent token" })
    let decode = jwt.verify(token, "hello guys this is my first jwt")
    if (!decode)
        return res.send({ status: false, msg: "something went wrong" })
        next()
}



let authorization=function (req,res,next){
    let token=req.headers['x-auth-token'];
    if (!token)
        return res.send({ status: false, msg: "absent token" })
    let decode = jwt.verify(token, "hello guys this is my first jwt")
    if (decode.userid !==req.params.userId)
        return res.send({ status: false, msg: "something went wrong" })
        next()

}

module.exports.authentication=authentication
module.exports. authorization= authorization

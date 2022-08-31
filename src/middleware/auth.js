const jwt = require('jsonwebtoken');



let authentication=function(req,res,next){
    try{
let token = req.headers['x-auth-token'];
    if (!token)
        return res.status(403).send({ status: false, msg: "absent token" })
    let decode = jwt.verify(token, "hello guys this is my first jwt")
    if (!decode)
        return res.status(403).send({ status: false, msg: "something went wrong" })
        next()
}
catch(err){
    res.status(500).send({error:err.message})
}
}

let authorization=function (req,res,next){
    try{
    let token=req.headers['x-auth-token'];
    if (!token)
        return res.status(403).send({ status: false, msg: "absent token" })
    let decode = jwt.verify(token, "hello guys this is my first jwt")
    if (decode.userId !==req.params.userId)
        return res.status(403).send({ status: false, msg: "something went " })
        next()

}catch(err){
    res.status(500).send({error:err.message})
}
}
module.exports.authentication=authentication
module.exports. authorization= authorization

const axios=require('axios')


const states=async function(req,res){
    try{
        let result=await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        console.log(result)
        let data=result.data
        res.status(200).send({msg:data})

}catch(err){
        res.status(500).send({error:err.message})
}
}
//------------------------------------findby district-------------------------------------
const getDistrictId= async function(req,res){
        try{
let id=req.params.stateId
let options={
        method:"get",
        url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
}
let result=await axios(options);
console.log(result);
let data=result.data;
res.status(200).send({status:true,msg:data})
        }
        catch(err){
                res.status(500).send({status:false,error:err.message})        
        }
}


//----------------------------------------------- 3rd find by pin------------------------------------------------

const getByPin= async function(req,res){
        try{
let pin=req.query.pincode
let date=req.query.date

let options={
        method:"get",
         url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
}
let result=await axios(options);
console.log(result);
let data=result.data;
res.status(200).send({status:true,msg:data})
        }
        catch(err){
                res.status(500).send({status:false,error:err.message})        
        }
}










module.exports.states=states
module.exports.getDistrictId=getDistrictId
module.exports. getByPin=getByPin
const axios=require('axios')


const districtId=async function(req,res){
    try{
        let result=await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        console.log(result)
        let data=result.data
        res.status(200).send({msg:data})





}catch(err){
        res.status(500).send({error:err.message})
}
}

module.exports.districtId=districtId
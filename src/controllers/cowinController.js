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
// assignment district id ke acording data fetch krna he


const getDistrict= async function(req,res){
        try{
let id=req.query.district_id
let date=req.query.date

let options={
        method:"get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
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


// ----------------------------------------------second question----------------------------------


const getWeather=async function(req,res){
        try{
                let q=req.query.q
                let appid=req.query.appid
                let options={
                        method:"get",
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=bec8350a92b369b9ac4708069d9a0215`
                }
                let result=await axios(options);
                console.log(result);
                let arr=[]
                let data=result.data;
                arr.push[data]

                res.status(201).send({status:true,msg:data})
               }catch(err){
                res.status(500).send({status:false,error:err.message})  

        }
}


// ----------------------------------------
const getcitytemp = async function (req, res) {
        try {
            let cities = [
                "Bengaluru",
                "Mumbai",
                "Delhi",
                "Kolkata",
                "Chennai",
                "London",
                "Moscow",
            ];
            let arr = [];
            for (i = 0; i < cities.length; i++) {
                let apikey = req.query.appid;
                let location = cities[i];
                let options = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`,
                };
                let result = await axios(options);
                let obj = { city: location, temperature: result.data.main.temp };
                arr.push(obj);
            }
            arr.sort((a, b) => a.temperature - b.temperature);
            res.status(200).send({ data: arr });
        } catch (err) {
            console.log(err);
            res.status(500).send({ msg: err.message });
        }
    };









// ----------------------------------------------memesAssignment--------------------------------------------------
const getAllMemes=async function(req,res){
try{

       
        let result=await axios.get('https://api.imgflip.com/get_memes')
        console.log(result)
        let data=result.data
        res.status(200).send({msg:data})
}catch(err){
        res.status(500).send({status:false,error:err.message})  

}
      
}
// ----------------------------------------creation---------------------------------------------

const getMeme=async function(req,res){
try{
        let a=req.body
let template_id =req.query.template_id 
let text0=req.query.text0
let text1=req.query.text1
let userName=req.query.username
let password=req.query.password
let options={
        method:"post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`,
data:a
}
let result=await axios(options)
let data=result.data
console.log(result)
res.status(200).send({status:true,msg:data})

}catch (err){
        res.status(500).send({status:false,error:err.message})
}

}
// https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&userName=${userName}&password=${password}






module.exports.states=states
module.exports.getDistrictId=getDistrictId
module.exports. getByPin=getByPin
module.exports.getDistrict=getDistrict
module.exports.getWeather=getWeather
module.exports.getAllMemes=getAllMemes
module.exports.getMeme=getMeme
module.exports.getcitytemp=getcitytemp

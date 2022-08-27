const express = require('express');
const { default: mongoose } = require('mongoose');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Dishap:gn6kyXLuhnBE1EJK@cluster0.bwp65jf.mongodb.net/disha1211?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDB is connected"))
.catch( err => console.log(err))
app.use(
    function(req,res,next){
       let date=new Date()
       let address=req.ip
       let uadd=req.url
console.log(date,address,uadd)
        next()
    }
)
app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

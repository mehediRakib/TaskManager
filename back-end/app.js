const express=require('express');
const app=new express();
const router=require('./src/routes/api')
const mongoose=require('mongoose');

//security middleware implement
const hpp=require('hpp');
const rateLimit=require('express-rate-limit');
const MongoSanitize=require('express-mongo-sanitize');
const bodyParser=require('body-parser');
const cors=require('cors');
const helmet = require("helmet");
const url = require("url");
const cookiParser=require('cookie-parser');


app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(MongoSanitize());
app.use(hpp());
app.use(cookiParser());


//request rate limit

const limiter=rateLimit(
    {
        windowMs:15*60*1000,
        max:3000
    }
)
app.use(limiter);


//database connection
let URL="mongodb+srv://<username>:<password>@cluster0.75qh3yi.mongodb.net/TaskManger";
let option={
    user:"rakib107054",
    pass:"rakib172561",
    autoIndex:true,
}
mongoose.connect(URL,option).then(()=>{
    console.log("database creation successfull");
})
    .catch((e)=>{
        console.log("database creation failed.and error:"+e.toString());
    })





app.use('/api/v1',router);

app.get("*",(req,res)=>{
    res.status(404).json({status:"fail",message:"not found"})
})




module.exports=app;

const {Decode} = require("../utility/TokenHelper");


module.exports =async (req,res,next)=>{
    let token=req.headers['token'];
    if(!token){
            token = req.cookies['token'];
    }

    let data=await Decode(token)
    if(data===null){
        res.status(401).json({status:"fail",message:"unauthorized"})
    }
    else{
        let email=data['email'];
        let user_id=data['user_id'];
        req.headers.email=email;
        req.headers.user_id=user_id;
        next();
    }
}
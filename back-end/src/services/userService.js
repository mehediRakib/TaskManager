const EmailSend=require('../utility/EmailHelper')
const userModel=require('../model/userModel');
const userProfileModel=require('../model/UserProfileModel');
const {Encode} = require("../utility/TokenHelper");
const mongoose=require('mongoose');
const ObjectID=mongoose.Types.ObjectId;

const userOTPService=async (req)=>{

    try {
       let email = req.params.email;
        let randomNumber = Math.floor(100000 + Math.random() * 900000);
        let message = "Your OTP is :" + randomNumber;
        let EmailSubject = "Task Manager"
        await EmailSend(email, message, EmailSubject);
        await userModel.updateOne({email: email}, {$set: {otp: randomNumber}}, {upsert: true});

        return {status: "success", message: "6 Digit otp have been send"};
    } catch (e) {
        return {status: "fail", message: e.toString()};
    }
}

const verifyOtpService=async (req)=>{
    let email=req.params.email;
    let otp=req.params.otp;
    const total=await userModel.find({email:email,otp:otp}).count('total')
    if(total===1){
        const user_id = await userModel.find({ email:email }).select('_id');
        let token=await Encode(email,user_id);
        await userModel.updateOne({email:email},{$set:{otp:"0"}});
        return{status:"success",message:"Valid OTP",token:token};
    }
    else{
        return {status:'fail',message:"Invalid OTP"};
    }

}


const readProfileService=async(req)=>{
    try{
        const user_id=req.headers.user_id;
        const data=await userProfileModel.find({userID:user_id});
        return { status: 'success', message: data };
    }
    catch (e) {
        return {status:'fail',message:e.toString()}
    }

}

module.exports={
     userOTPService,
    verifyOtpService,
    readProfileService,
}
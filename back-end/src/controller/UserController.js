const {userOTPService, verifyOtpService, readProfileService} = require("../services/userService");


exports.userOTP=async (req, res) => {
    const result = await userOTPService(req);
    res.status(200).json(result);

}

exports.verifyLogin=async (req, res) => {
    const result = await verifyOtpService(req);
    if(result['status']==='success'){
        let cookieOption={expires:new Date(Date.now()+24*6060*1000),httponly:false};
        res.cookie("token",result['token'],cookieOption);
        res.status(200).json(result);
    }
    else {
        res.status(200).json(result);
    }

}

exports.readProfile=async (req,res)=>{
    const result=await  readProfileService(req);
    res.status(200).json(result);
}

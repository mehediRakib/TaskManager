import axios from "axios";


export async function otpSent(postbody){
    const res=await axios.post('http://localhost:7050/api/v1/userOTP/'+postbody)
    if(res.status===200){
        return true;
    }
    else {
        return false;
    }
}


export async function OTPverify(email,otp){
    const res=await axios.get('http://localhost:7050/api/v1/verifyLogin/'+email+'/'+otp);
    if(res.status===200){
        return true;
    }
    else {
        return false;
    }
}
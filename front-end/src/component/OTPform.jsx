import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";
import {OTPverify} from "../ApiRequest/apiRequest.js";

const OtPform = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const email = query.get('email');
    const [otp,setOtp]=useState();

    const Otpverify=async ()=>{
        let data=await OTPverify(email,otp);
        console.log(data);
        if(data){
            toast.success("validation successful");
        }
        else {
            toast.error("Incorrect OTP")
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 otp">
                    <h2>OTP</h2>
                    <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='form-control' placeholder="Enter OTP"/>
                    <button className="btn btn-success col-md-4 my-5" onClick={Otpverify}>verify</button>

                </div>
            </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={true}/>
        </div>
    );
};

export default OtPform;
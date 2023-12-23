import React, {useState} from 'react';
import {otpSent} from "../ApiRequest/apiRequest.js";
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
    const [value,setValue]=useState('')

    const navigate=useNavigate()


     const send=async () => {
         if (value.length === 0) {
             toast.error("Please enter email");
         } else {
             navigate('/otpPage?email='+value);
           let res= await otpSent(value);
           if(res){
               toast.success("check otp");
           }
           else {
               toast.error("Something went wrong");
           }
         }
     }
    return (

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 my-5">
                        <div className="card shadow">
                            <div className="card-header">
                                <h2>Sign Up</h2>
                            </div>
                            <div className="card-body">
                                <input  value={value} onChange={(e)=>setValue(e.target.value)} className='form-control icon-link-hover border-2' type="email" name="email" placeholder="Enter Your Email"/>
                            </div>
                            <div>
                                <button className="btn btn-success col-md-5 mx-2 p-2 my-2 signup" onClick={send}>submit</button>
                                <button className="btn btn-danger col-md-5 mx-2 p-2 my-2">Login</button>
                            </div>
                            <br/>

                        </div>
                    </div>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={true}
                />
            </div>
    );
};

export default SignupForm;
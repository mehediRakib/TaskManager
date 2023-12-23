import React from 'react';
import Nabvar from "../component/Nabvar.jsx";
import SignupForm from "../component/signupForm.jsx";
import Footer from "../component/footer.jsx";
import '../assets/css/style.css'

const SignUpPages = () => {
    return (
        <div>
           <Nabvar/>
            <SignupForm/>
            <Footer/>
        </div>
    );
};

export default SignUpPages;
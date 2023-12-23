import React from 'react';

import Footer from "../component/footer.jsx";
import OTPform from "../component/OTPform.jsx";
import Nabvar from "../component/Nabvar.jsx";

const VerifyOtpPage = () => {
    return (
        <div>
            <Nabvar/>
              <div>
                  <OTPform/>
              </div>
            <Footer/>
        </div>
    );
};

export default VerifyOtpPage;
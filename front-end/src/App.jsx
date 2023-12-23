import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPages from "./pages/SignUpPages.jsx";
import VerifyOtpPage from "./pages/VerifyOtpPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/signUp' element={<SignUpPages/>}/>
                <Route path='/otpPage' element={<VerifyOtpPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
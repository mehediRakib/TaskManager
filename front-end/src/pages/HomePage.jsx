import React from 'react';
import Nabvar from "../component/Nabvar.jsx";
import '../assets/css/style.css'
import Footer from "../component/footer.jsx";

const HomePage = () => {
    return (
        <div>
            <div className="block0">
                <Nabvar/>
                <div>
                        <div className='block1'>
                            <h1>From here ,Learning is begin</h1>
                        </div>

                </div>
            </div>
            <Footer/>

        </div>

    );
};

export default HomePage;
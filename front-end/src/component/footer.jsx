import React from 'react';
import '../assets/css/style.css'

const Footer = () => {
    return (

      <div className='container justify-content-center'>
          <div className='row'>
                <div className="my-5">
                    <div>
                        <p>@All Rights Reserved Here</p>
                        <p>email:rakib107054@gmail.com</p>
                        <p>contact:+880 1611650721</p>

                    </div>
                    <div>
                        <a href="https://www.facebook.com/"><img className="fb" src="https://slashtraders.com/wp-content/uploads/2021/04/fb.png"/></a>
                        <a href="https://www.instagram.com/accounts/login/"><img className="insta" src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"/></a>
                    </div>

                </div>
          </div>
      </div>
    );
};

export default Footer;
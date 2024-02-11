import './otp.css'
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
function OTP() {
    const navigate=useNavigate()


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current,"form.current")
    emailjs
      .sendForm('service_70sqlfd', 'template_hdkn5ni', form.current, {
        publicKey: '_wnNvzjOZfbm4ucok',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className="bg-[#FFF] ">
            <div className="content">
                <div className="data">
                    <h1> Send a Email </h1>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <div style={{width:'20rem',height:'2.rem',margin:'10px'}}  className="text">
                    <input type="text" className='mt-1 mb-1'  placeholder="email"   name="user_email" />
                </div>
                <br/>
                <button style={{ width: '15rem' }} type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
                </form>
            
            </div>
            </div>
        
            )
}
            export default OTP   
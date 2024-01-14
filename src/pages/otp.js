import React from "react";
import './otp.css'
import { useNavigate } from "react-router-dom";
 
function OTP() {
    const navigate=useNavigate()
    return (
        <div className="bg-[#FFF] ">
            <div className="content">
                <div className="data">
                    <h1>  Enter Your 4-digit Security Code </h1>
                </div>
                <div style={{width:'30rem',height:'2.rem',margin:'5px'}}  className="text">
                    <input type="Number"  placeholder="OTP"/>
                </div>
                <button style={{ width: '15rem' }} onClick={() => { navigate('/') }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignIn</button>
            
            </div>
            </div>
        
            )
}
            export default OTP   
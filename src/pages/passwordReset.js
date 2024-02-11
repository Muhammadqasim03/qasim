import './otp.css'
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 
function ResetPassword() {
    const navigate=useNavigate();
    const {email} = useParams()
     const [mail , setEmail] = useState(email);
     const [password , setPassword] = useState();
    const update = () => {
  
      axios.post("http://localhost:3000/auth/resetPassword", {
        email: email,
        password: password,
      })
        .then((response) =>{
          toast.success("Your password has been updated Successfully!")
        } 
        )
        .catch((err) => {
          toast.error(err.response.data)
        } )
      
    }

 
    return (
        <div className="bg-[#FFF] ">
          <ToastContainer/>
            <div className="content">
                <div className="data">
                    <h1> Reset Password </h1>
                </div>
             
                <div style={{width:'30rem',height:'2.rem',margin:'5px'}}  className="text">
                    <input type="text" onChange={(e)=>setPassword(e.target.value)}  placeholder="password"   name="password" />
                 </div> 
                
                <button style={{ width: '15rem' }} type="submit" onClick={()=>{update()}} value="Send" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
            
            
            </div>
            </div>
        
            )
}
export default ResetPassword   
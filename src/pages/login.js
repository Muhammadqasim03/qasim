import React from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate()
 
  return (

    <div style={{ height: '100vh  ', width:'180vh'}} class="  grid grid-cols-2" >

      <div className="bg-[#0457D2]">
        <div className="logo">  <h3 >LOGO</h3> </div>
        <div className="welcom">
          <h2> Welcome back to SIGN IN </h2>
        </div>
      </div>
      <div className="bg-[#FFF] ">
        <div className="content">
          <div>
            <input style={{width:'15rem',height:'2.5rem', margin:'5px'}} className="input" type="email" placeholder="UserEmail" />
          </div>
          <div>
            <input  style={{width:'15rem',height:'2.5rem',margin:'5px'}} type="pass" placeholder="Password"/>
          </div>
          <button style={{width:'15rem'}} onClick={() => { navigate('/signup') }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignIn</button>
        </div>
      </div>
      

    </div >

  );
}

export default Login;
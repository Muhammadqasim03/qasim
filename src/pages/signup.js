import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'
function Signup() {
  const navigate = useNavigate()
  return (
    <div style={{ height: '100vh ', width:'180vh' }} class="grid grid-cols-2 ">
      <div className="bg-[#0457D2]">
        <div className="logo"> <h3 >LOGO</h3></div>
        <div className="welcom"> 
        <h6>Wellcome Back to <b>SIGN UP</b> </h6>
        </div>
      </div>
      <div className="bg-[#FFF]">
        <div className="content">
        <div>
          <input style={{width:'15rem',height:'2.8rem', margin:'4px'}} type="name" placeholder="UserName"></input>
        </div>
        <div>
          <input style={{width:'15rem',height:'2.5rem', margin:'5px'}} type="email" placeholder="UserEmail"></input>
        </div>
        <div>
          <input style={{width:'15rem',height:'2.5rem', margin:'5px'}} type="number" placeholder="Password"></input>
        </div>
        <button style={{width:'15rem'}} onClick={() => { navigate('/login') }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUP</button>

       <div style={{textAlign:'center'}}>  <Link>Sign in with Google</Link></div>
        </div>
      </div>
    </div>



  );
}

export default Signup;
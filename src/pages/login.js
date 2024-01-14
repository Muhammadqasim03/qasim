import React, { useState , useEffect } from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notify = () => toast.success("You have been login Successfully ") ;

  useEffect(()=>{  
    const token =  localStorage.getItem('token')
    if(token){
navigate('/main')
    }
 },[])
  const login = () => {
   

    axios.post("http://localhost:3000/auth/login", {
      email: email,
      password: password,
    })
      .then((response) =>{
       localStorage.setItem('token',response.data.token)
        notify();
        navigate('/main')
      } 
      )
      .catch((err) =>  toast.error(err.response.data))
    
  }

  return (
<><ToastContainer/>

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
      <input value={email} style={{width:'15rem',height:'2.5rem', margin:'5px'}} onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="UserEmail" />
    </div>
    <div>
      <input value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'15rem',height:'2.5rem',margin:'5px'}} type="pass" placeholder="Password"/>
    </div>
    <button style={{width:'15rem'}} onClick={() => { login() }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignIn</button>
    <div className="mt-2  " style={{ textAlign: 'center' }}>   Don't have an 
          <a className=" p-1 underline " onClick={()=>{navigate('/signup')}}>Account?</a> </div>
  </div>

       
</div>


</div ></>
   

  );
}

export default Login;
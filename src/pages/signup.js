import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularJSON from 'circular-json';
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notify = () => toast.success("You have been Registered Successfully ");
  const signup = () => {

    console.log({
      name: name,
      email: email,
      password: password,
    })
    axios.post("http://localhost:3000/auth/register", {
      name: name,
      email: email,
      password: password,
    })
      .then((response) => {
        setEmail('');
        setName('')
        setPassword('')
        notify()
      }
      )
      .catch((err) => toast.error(err.response.data))

  }

  return (
    <div className=" container row">
      <ToastContainer />
      <div className=" col-sm-6 bg-[#0457D2]">
        <div className="logo"> <h3 >LOGO</h3></div>
        <div className="welcom">
          <h6>Wellcome Back to <b>SIGN UP</b> </h6>
        </div>
      </div>
      <div className="col-sm-6  bg-[#FFF]">
        <div className="content">
          <div>
            <input value={name} type="text" placeholder="UserName" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <input value={email} type="email" placeholder="UserEmail" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input value={password} type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button style={{ width: '15rem' }} onClick={signup} class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUP</button>

          <div className="mt-2  " style={{ textAlign: 'center' }}>   Already have an
            <a className=" p-1 underline " onClick={() => { navigate('/login') }}>Account?</a> </div>
        </div>
      </div>
    </div>



  );
}

export default Signup;
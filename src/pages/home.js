import React, { useEffect, useState } from "react";
import './home.css'
import Signup from "./signup";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
// import img1 from './images/hero-b 1.png'

function Home() {
    const navigate = useNavigate()
    const [state, setstate] = useState(false)
    useEffect(()=>{  
       const token =  localStorage.getItem('token')
       if(token){
        navigate('/main')
       }else{
        setstate(localStorage.getItem('mode'))      
       }
    },[])
    return (
        <div>
        <div className={!state ? 'body' :   'body-dark-mode'} >
        <div className="row"  >
                <h1 className={!state ? 'col-9 text-dark' : 'col-9 text-white'}> <span className="mt-2" style={{ position: "relative", left: '-27rem', marginTop: '2rem' }}>LOGO</span> </h1>
                <div className="col-2 d-flex m-2 ">
                    <h4 style={{ color: '#0457D2' }} className="mt-4" onClick={() => {  localStorage.removeItem('token');
                           navigate('/login') }}> 
                        LOGOUT </h4>
                    <strong onClick={() => {
                        const val = localStorage.getItem('mode')
                        localStorage.setItem('mode', val ? false : true)
                        setstate(state ? false : true)
                    }} className="m-3  p-2" style={{ fontSize: '20px', background: '#0457D2', color: 'white' }} >Light Mode</strong>
                </div>

            </div>
            <div class="main" >
                <div className="chose">
                    <p>
                        Choose Your Course
                        to Success
                    </p>

                </div>
                {/* <div className="imag">
                    <img src= {img1} alt="reloding" />
                </div> */}
                <div className="para" >
                    <h1 >
                        Build skills with courses, certificates, and degrees online
                        from world-class universities and companies

                    </h1>
                    <span>
                    <button style={{  paddingTop: '6px', marginTop: "2rem",  }} onClick={() => { navigate('/login') }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded m">  Get Started</button>
                    </span>
                </div>
              
            </div>
            <div className="supplementaryContent">
                <div className="heading1 text-dark text-center">
                    We Provide You
                    The Better Solutions
                </div>
                <div className="heading2 text-dark text-center">We have the Better solutions of your problems. Website is a digital platform created by a consultant or consultancy firm to showcase their skills, expertise, and services to potential clients. Consulting websites typically include information about the firm's services, testimonials or case studies from satisfied clients, contact information, and a portfolio of work. Some consulting websites may also include a blog or resources section to share updates, insights, and helpful information related to the firm's area of expertise.
                </div>
            </div>

            

        </div >
        
       
            <Footer/>
        </div>
    )
}
export default Home;
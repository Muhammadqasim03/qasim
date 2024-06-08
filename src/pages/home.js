import React, { useEffect, useState } from "react";
import './home.css'
import Signup from "./signup";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

import img1 from './images/saplash.png'

function Home() {
    const navigate = useNavigate()
    const [state, setstate] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/main')
        } else {
            setstate(localStorage.getItem('mode'))
        }
    }, [])
    return (
        <div>
            <div className={!state ? 'body' : 'body-dark-mode'} >
                <div className="row p-2 bg-white"  >
                    <h1 className={state ? 'col-9 text-dark' : 'col-9 text-white'}> <span className="col-10 text-dark" style={{ position: "relative", left: '-27rem', }}>LOGO</span> </h1>
                    <div className="col-2 d-flex m-2 ">
                        <h4 style={{ color: '#0457D2'}} className="mt-1 btn mt-5" onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login')
                        }}>
                            LOGOUT </h4>
                        <strong onClick={() => {
                            const val = localStorage.getItem('mode')
                            localStorage.setItem('mode', val ? false : true)
                            setstate(state ? false : true)
                        }} className="  p-2 rounded mx-2 " style={{ fontSize: '12px', background: '#0457D2', color: 'white' }} >{state ? "Light Mode" : "Dark Mode"}</strong>
                    </div>"

                </div>
                <div class="main row" >
                    <div className=" chose col-6">
                        <p>
                            Choose Your <span className="text-primary">Course</span> <br />
                            to Success
                        </p>
                        <div className="para" >
                            <h5 className="px-2">
                                Build skills with courses, certificates, and degrees online
                                from world-class universities and companies

                            </h5>
                            <span>
                                <button onClick={() => { navigate('/login') }} className="bg-primary text-white p-1 m-2 get-Started">  Get Started</button>
                            </span>
                        </div>

                    </div>
                    <div className="col-6">
                        <img width={450} height={450} className="mt-5 ml-2" src={img1} alt="reloding" />
                    </div>


                </div>
                <div className={state ? 'supplementaryContentDark' : 'supplementaryContentLight'}>
                    <div className={state ? "heading1Dark  text-center" : "heading1Light  text-center"}>
                        We Provide You
                        The Better Solutions
                    </div>
                    <div className={state ? "heading2Dark  text-center p-3" : "heading2Light p-3 text-center"}>We have the Better solutions of your problems. Website is a digital platform created by a consultant or consultancy firm to showcase their skills, expertise, and services to potential clients. Consulting websites typically include information about the firm's services, testimonials or case studies from satisfied clients, contact information, and a portfolio of work. Some consulting websites may also include a blog or resources section to share updates, insights, and helpful information related to the firm's area of expertise.
                    </div>
                </div>



            </div >


            <Footer />
        </div>
    )
}
export default Home;
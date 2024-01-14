import React from "react";
import Header from "../pages/header";
import form from '../pages/images/form.png'
import './form.css'
import { Carousel } from "bootstrap";
import Footer from "../pages/footer";

const Form=()=>{
  return(
    <div>
    <Header/>
    <div className="info1">
        <h1 className="appoint" >Get an Appointment</h1>
    </div>
    <div className="info2" >
        <div className="text">
            <h2>We are happy to answer any questions you may have, just drop us a line.</h2>
        </div>
        <div className="contect">
        <h1>Contact us</h1>
        </div>
        <div className="gmail">
            <h1>mqasimali421@gmail.com</h1>
        </div>
        <div className="phone">
            03080737092
        </div>

    </div>
    <Footer/>
   
</div>
  )


}
export default Form;
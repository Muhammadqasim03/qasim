import React from "react";
import Header from "../pages/header";
import Footer from "../pages/footer";
import './consultancy.css'
import GenericCard from "./card";
import economic from "../../src/pages/images/economicissue.png"
import humanright from "../pages/images/humanright.png"
import legal from "../../src/pages/images/legalissue.png"
import { useNavigate } from "react-router-dom";
const Consultancy=()=>{
    const  navigate =useNavigate();
    return(
     <div>
        <Header/>
        <div className="row">
                <div className="legal">
                    <h2 className="heading1">Legal Consultancy</h2>
                    <p className="heading2">A legal consultant is a professional who provides legal guidance to businesses and individuals. This job title is interchangeable with the title of a legal advisor. While those in this role have many of the same responsibilities as lawyers, they solely provide legal advice outside of the courtroom. Common fields they work in include business law, real estate, foreign affairs and financial law. Clients hire legal consultants to ensure that they are making legal decisions and developing business practices that follow the law.</p>
                    <button className="appointment-btn btn" type="button" onClick={() => {
                        navigate('/form')
                    }}>Book Appointment</button>
                </div>
                <div className="secondDiv">
                    <div className="text mt-5 mb-4">
                        <h1>What Will You Get</h1>
                    </div>
                    <div className=" row  mt-5 mb-5 p-5">
                        <div className="rounded col-sm-4">
                            <GenericCard image={economic} title="Economic Significance" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat." />
                        </div>
                        <div className="   rounded col-sm-4">
                            <GenericCard image={humanright} title="Human Rights" discription="powerful employees relationship, add your details save your work. aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat." />
                        </div>
                        <div className="   rounded col-sm-4">
                            <GenericCard image={legal} title="" discription="we arrange meetings for queries and related consultancy course then let us know your questions that we should help you. Lorem ipsum dolor sit amet." />

                        </div>
                    </div>

                </div>

                <Footer />
            </div>
     </div>

    )
}
export default Consultancy;
import React from "react";
import Header from "../pages/header";
import human from "../pages/images/human.png"
import Footer from "../pages/footer";
import GenericCard from "./card";
import './hr.css'
import employe from '../../src/pages/images/employe.png'
import Outsoucing from '../../src/pages/images/outsourcing.png'
import meating from '../../src/pages/images/meating.png'
const HR = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="hr">
                    <h2 className="heading1">Human Resource Management</h2>
                    <p className="heading2">Human resource management is organizing, coordinating, and managing employees within an organization to carry out an organization's mission, vision, and goals. This includes recruiting, hiring, training, compensating, retaining, and motivating employees. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputatev</p>
                </div>
                <div className="secondDiv">
                    <div className="text mt-5 mb-4">
                        <h1>What Will You Get</h1>
                    </div>
                    <div className=" row  mt-5 mb-5 p-5">


                        <div className="rounded col-sm-4">
                            <GenericCard image={employe} title=" HR Outsoucing" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat." />
                        </div>
                        <div className="   rounded col-sm-4">
                            <GenericCard image={Outsoucing} title="Employee Relation" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat." />
                        </div>
                        <div className="   rounded col-sm-4">
                            <GenericCard image={meating} title="Meeting Facilitation" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat." />

                        </div>
                    </div>

                </div>

                <Footer />
            </div>




        </div>

      
    )
 
}
export default HR;
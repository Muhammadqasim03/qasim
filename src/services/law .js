import React from "react";
import Header from "../pages/header";
import law from '../pages/images/law.png'
import Footer from "../pages/footer";
import './law.css'
import GenericCard from "./card";
import question from '../../src/pages/images/question.png'
import team from '../../src/pages/images/team.png'
const Law = () => {
     
    return (
        <div>
            <Header title="qasim"  />
            <div className="row">
                <div className="img">
                    <h2 className="heading1">LAW CONSULTANCY</h2>
                    <h3 className="heading2">lawyer, one trained and licensed to prepare, manage, and either prosecute or defend a court action as an agent for another and who also gives advice on legal matters that may or may not require court action. Lawyers apply the law to specific cases. They investigate the facts and the evidence by conferring with their clients and reviewing documents, and they prepare and file the pleadings in court.</h3>
                </div>
                <div className="secondDiv">
                    <div className="text mt-5 mb-4">
                       <h1>What Will You Get</h1> 
                    </div>
                    <div className=" row  mt-5 mb-5 p-5">

                       
      <div className="rounded col-sm-4">
      <GenericCard image={team} title="OUR TEAM" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat."/>
      </div>
      <div className="   rounded col-sm-4">
      <GenericCard image={team} title="OUR TEAM" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat."/>
      </div>
      <div className="   rounded col-sm-4">
      <GenericCard image={question} title="OUR TEAM" discription="Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat."/>

      </div>
                    </div>

                </div>

            </div>

            <Footer />
        </div>


    )
}
export default Law;
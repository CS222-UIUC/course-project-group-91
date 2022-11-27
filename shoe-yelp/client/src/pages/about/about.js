import React from "react";
import "./about.css"
import img from "./fay.jpeg";
const About = () => {
  return (
    <>
    <div className="body">
      <div className="banner">
        <section class="header">
          <h1>ABOUT US</h1>
        </section>
      </div>
      <div className="about">
        <div id = "description">
          <h3>OUR MISSION</h3>
          <br></br>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </b>
          </p>
        </div>
        <div className="developers">
          <div className="devCard">
            {/* Dylan */}
            <img src = {img} className = "profileImg"/>
            <h3>DYLAN BRENNAN</h3>
            <p className="role" >Backend Development</p>
            <p>Computer Science + Anthropology</p>
          </div>
          <div className="devCard">
            {/* Emmanuel */}
            <img src = {img} className = "profileImg"/>
            <h3>EMMANUEL BUABENG</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science</p>
          </div>
          <div className="devCard">
            {/* Fay */}
            <img src = {img} className = "profileImg"/>
            <h3>FAY LIN</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science + Chemistry</p>
            
          </div>
          <div className="devCard">
            {/* Kyle */}
            <img src = {img} className = "profileImg"/>
            <h3>KYLE POLSON</h3>
            <p className="role" >Backend Development</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
  
export default About;
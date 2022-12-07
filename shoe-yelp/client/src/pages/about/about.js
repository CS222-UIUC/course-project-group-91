import React from "react";
import "./about.css"
import fay_img from "./fay.jpeg";
import dylan_img from "./dylan.jpg";
import kyle_img from "./kyle.jpg";
import emmanuel_img from "./emmanuel.jpg";
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
            Shoe Annex is a community forum made for and by sneakerheads. With the ability to post, discuss, and see the top-trending shoes in the sneaker community, Shoe Annex is the central hub for all things 'shoes'. In creating this project, we not only wanted to develop a prototype for a very real and plausible product but also hone our programming and software engineering skills.
            </b>
          </p>
        </div>
        <div className="developers">
          <div className="devCard">
            {/* Dylan */}
            <img src = {dylan_img} className = "profileImg"/>
            <h3>DYLAN BRENNAN</h3>
            <p className="role" >Backend Development</p>
            <p>Computer Science + Anthropology</p>
          </div>
          <div className="devCard">
            {/* Emmanuel */}
            <img src = {emmanuel_img} className = "profileImg"/>
            <h3>EMMANUEL BUABENG</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science</p>
          </div>
          <div className="devCard">
            {/* Fay */}
            <img src = {fay_img} className = "profileImg"/>
            <h3>FAY LIN</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science + Chemistry</p>
          </div>
          <div className="devCard">
            {/* Kyle */}
            <img src = {kyle_img} className = "profileImg"/>
            <h3>KYLE POLSON</h3>
            <p className="role" >Backend Development</p>
            <p>Computer Science</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
  
export default About;
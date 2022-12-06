import React from "react";
import "./about.css"
import dylan from "./dylan.jpg";
import emmanuel from "./emmanuel.jpg";
import fay from "./fay.jpeg";
import kyle from "./kyle.jpg";
import { useState, useEffect } from 'react'
const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/about").then(res => res.json()).then(data => setData(data))
  }, [])
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
              When we started out, we weren't sure what project to take on. We had laid out multiple ideas but to no avail. One of our members brought up a way to find out the best shoes and write about your favorites. That led us to create ShoeAnnex. Combining love for shoes and computer science, we found ourselves creating ShoeAnnex. We hope you find what shoe you're looking for.
              <div>{data.name}</div>
              <div>{data.age}</div>
            </b>
          </p>
        </div>
        <div className="developers">
          <div className="devCard">
            {/* Dylan */}
            <img src = {dylan} className = "profileImg"/>
            <h3>DYLAN BRENNAN</h3>
            <p className="role" >Backend Development</p>
            <p>Computer Science + Anthropology</p>
          </div>
          <div className="devCard">
            {/* Emmanuel */}
            <img src = {emmanuel} className = "profileImg"/>
            <h3>EMMANUEL BUABENG</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science</p>
          </div>
          <div className="devCard">
            {/* Fay */}
            <img src = {fay} className = "profileImg"/>
            <h3>FAY LIN</h3>
            <p className="role" >Frontend Development</p>
            <p>Computer Science + Chemistry</p>
          </div>
          <div className="devCard">
            {/* Kyle */}
            <img src = {kyle} className = "profileImg"/>
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
import React from "react";
import "./about.css"
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
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              {/*  */}
              <div>{data.name}</div>
              <div>{data.age}</div>
            </b>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
  
export default About;
import React from 'react';
import "./home.css"
import banner from "./shoeBanner.png";
const Home = () => {
  return (
    <>
    <div className="body">
      <div className="banner">
        <img src = {banner} alt = "shoe banner" id = "banner"/>
      </div>
      <div className="home">
        <div id = "description">
          <h3>CHANGE YOUR SHOE GAME</h3>
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
        <br></br>
        <br></br>
        <div id = "description">
          <h3>FIND YOUR PERFECT FIT</h3>
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
        <br></br>
        <br></br>
        <div id = "description">
          <h3>CREATE A COMMUNITY</h3>
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
      </div>
    </div>
    </>
  );
};
  
export default Home;
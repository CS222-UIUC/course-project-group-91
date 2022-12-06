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
              We are for the adventurers, the ones who dare to go beyond the norm for their style. We take what's popular further. These shoes are at the top of their class, breaking records left and right. You won't regret sourcing the newest styles at ShoeAnnex.
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
              This community is for anyone looking for their ideal shoe. In a sea of options, how do you find the perfect fit? Using the information gathered through our forums and communities, you can discover a whole new world of opinions and styles to make sure you find the real reviews before making the big purchase. We want to help you find that dream style here at ShoeAnnex.
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
              We want our users to find their community, a group of fellow shoe lovers who talk about their faves and hates. This is the place for all shoe conversations, ratings and latest hits. We all come together with one goal: to amplify your shoe style. 
            </b>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
  
export default Home;
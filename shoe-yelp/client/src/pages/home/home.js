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
            Find your newest pair of kicks in the Trending Tab and chase the hottest trends from around the world. Whether it's Nike or Adidas,
            sneaker or boat shoe - you'll find what's in style and in stock.
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
            Not sure if the shoe you're thinking of buying is right for you? Shoe Annex is the perfect place to go for honest opinions and reviews.
            As a third-party site, you don't have to worry about fake reviews or ratings - everything comes from right within the community. Find
            out the inside scoop on your favorite brands and more.
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
            Shoe Annex is a place for discussion and deliberation - search through the Forum Page to find shoes you'd like to discuss
            and possibly add to your own collection. Have an interest in a niche brand that others might share? Find your crowd and build
            your own communities within the forum by liking each others' posts.
            </b>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
  
export default Home;
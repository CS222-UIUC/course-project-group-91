import React from 'react';
import "./post.css"
import img from "./airforce1.png"
import Button from '@mui/material/Button';


// card element sourced from MaterialUI docs
const Post = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
          <section class="header">
            <h1>FORUM</h1>
          </section>
        </div>
          <div className="post">
            {/* post information sourced from database */}
            <div className='general'>
              <div className = 'details'>
              <h3>
                {"Air Force 1"}
              </h3>
              <br></br>
              <h4>
                {"Nike"}
              </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className='postImage'>
                  <img src = {img} id = "postImg"/>
              </div>
            </div>
            {/* post comment section */}
            <div className='commentList'>
              <div className='commentSection'>
                <div className='commentTitle'> 
                  <h3>
                    {"Comments"}
                  </h3>
                </div>
                <div className='commentCard'></div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Post;
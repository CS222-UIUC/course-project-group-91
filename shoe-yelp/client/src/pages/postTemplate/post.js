import React from 'react';
import "./post.css"
import img from "./airforce1.png"
import Button from '@mui/material/Button';

// card element sourced from MaterialUI docs
const Post = (props) => {
  console.log(props.name)
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
                {props.name}
              </h3>
              <br></br>
              <h4>
                {props.brand}
              </h4>
                <p>{props.description}</p>
              </div>
              <div className='postImage'>
                  <img src = {props.src} id = "postImg"/>
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
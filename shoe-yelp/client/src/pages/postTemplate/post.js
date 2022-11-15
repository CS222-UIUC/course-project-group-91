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
            <h3>
              {"post name"}
            </h3>
            {/* post information sourced from database */}
            {/* post comment section */}
            <div className='postImage'>
                <img src = {img} id = "postImg"/>
            </div>
          </div>
      </div>
    </>
  );
};

export default Post;
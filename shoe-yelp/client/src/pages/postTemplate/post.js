import React from 'react';
import "./post.css"
import img from "./airforce1.png"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
let post = {
  name: "NIKE",
  brand: "Air Force 1",
  description: " Can never go wrong with a fresh pair of air forces. I would recommend purchasing the crease protector, true air force 1 heads know what I'm talking about.",
  src: img,
  comments: [],
}
// changes data in the forum data
export function changePost(newPost) {
  post.name = newPost.name;
  post.brand = newPost.brand;
  post.description = newPost.description;
  post.src = newPost.src;
  post.comments = newPost.comments;
}
// card element sourced from MaterialUI docs
const Post = () => {
  console.log(post.name)
  let navigate = useNavigate();
  let path = '/forum';
  function back() {
    navigate(path);
  }
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
                {post.name}
              </h3>
              <br></br>
              <h4>
                {post.brand}
              </h4>
                <p>{post.description}</p>
              </div>
              <div className='postImage'>
                  <img src = {post.src} id = "postImg"/>
              </div>
            </div>
            {/* post comment section */}
            <Button variant="contained" onClick={back}> {"<"}</Button>
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

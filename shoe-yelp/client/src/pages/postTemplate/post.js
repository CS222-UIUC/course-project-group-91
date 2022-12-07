import React from 'react';
import "./post.css"
import profileImg from "./profile.jpeg"
import img from "./airforce1.png"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
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
  //fetches data from api
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/forum/post").then(res => res.json()).then(data => setData(data))
  }, [])
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
              <div className='commentSection'>
                <div className='commentTitle'> 
                  <h3>
                    {"Comments"}
                  </h3>
                </div>
                <br></br>
                {/* comment template */}
                <div className='commentCard'>
                  <div className='commentImg'>
                    <img src = {profileImg} id = 'profileImg'/>
                    <p><b>@{data.username}</b></p>
                  </div>
                  <div className='commentText'>
                    <p> {data.text} </p>
                  </div>
                </div>
              </div>
          </div>
          <br></br>
          <Button variant="contained" onClick={back}> {"GO BACK"}</Button>
      </div>
    </>
  );
};
export default Post;

import React, { useState } from 'react';
import "./forum.css";
import Post from "./post.js"
import Button from '@mui/material/Button';

const Forum = () => {
  let data = [<div></div>]
  const [posts, setPosts] = useState(data)
  const addPost = event => {
    console.log(posts)
    let get_posts = posts.slice() // apparently we need to use .slice() to update posts
    get_posts.push(<div ></div>)
    setPosts(get_posts)
  };
  return (
    <>
      <div className="body">
        <div className="banner">
            <h1>
              {/* include a banner at the top */}
              [INSERT BANNER]
            </h1>
          </div>
          <div className="forum">
            <h1>
              FORUM
            </h1>
            <div>
            {posts.map((post, index) =>{
                return(
                  <a href={"/forum/" + index}><Post post={post} path={"/forum/" + index}> </Post></a>
                );
            })}
            
            </div>
            <Button variant="contained" onClick={addPost}>+</Button>
            
            {/* include cards + create post button */}
          </div>
      </div>
    </>
  );
};
  
export default Forum;
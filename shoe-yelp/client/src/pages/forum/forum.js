import React, { useState } from 'react';
import "./forum.css"
import { useNavigate } from "react-router-dom";
import img from "./airforce1.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {changePost} from "./postTemplate/post";

// card element sourced from MaterialUI docs
const Forum = () => {
  let navigate = useNavigate();
  let path = `/forum`; 
  const click = (showPost) => {
    // on click, switch page
    path = `/forum/postTemplate/post`; 
    changePost(showPost);
    navigate(path);
  }
  //   <a href={"/forum/post"}><Post post={post} name={"For name"} 
                //   brand={"For Brand"} description={"For description"} 
                //   comment={["data", "lost"]} image={"url"}> </Post></a>
  
// template post
  const post = {
    name: "NIKE",
    brand: "Air Force 1",
    description: " Can never go wrong with a fresh pair of air forces. I would recommend purchasing the crease protector, true air force 1 heads know what I'm talking about.",
    src: img,
    comments: [],
  }
  // instead of hard coding posts, use route from database instead
  let data = [post]
  const [posts, setPosts] = useState(data)

  // on button click, go to new post page and create a new post to be uploaded to database
  const addPost = event => {
    // console.log(posts)
    // let get_posts = posts.slice() // apparently we need to use .slice() to update posts
    // get_posts.push(post)
    // setPosts(get_posts)
    navigate('/forum/newPost');

  };
  if(window.location.pathname === "/forum") {
    return (
      <>
        <div className="body">
          <div className="banner">
            <section class="header">
              <h1>FORUM</h1>
            </section>
          </div>
            <div className="forum">
              {/* include cards + create post button */}
              <h3>
                ALL POSTS
              </h3>
              {/* creating expanded cards https://www.tutorialspoint.com/how-to-create-expanding-cards-using-html-css-and-javascript */}
              {/* should be pulled from database */}
              {/* create card default file*/}
              {posts.map((post) =>{
                return(
                <div className="card">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={()=>click(post)}>
                      <CardMedia
                        component="img"
                        height="140"
                        image = {img}
                        alt="air force one"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {post.name}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                          {post.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>)
              })}
              <br></br>
              <Button variant="contained" onClick={addPost}>+</Button>               
            </div>
      </div>
      </>
    );
  } else if (window.location.pathname === "/forum/post") {
    return (
      <div>
      </div>
    );
  }
};

export default Forum;
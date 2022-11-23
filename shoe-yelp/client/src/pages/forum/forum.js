import React, { useState } from 'react';
import "./forum.css"
import { useNavigate } from "react-router-dom";
import img from "./airforce1.png"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import NewPost from './newPost.js';
import ForumPost from "../postTemplate/post";

// card element sourced from MaterialUI docs
const Forum = () => {
  let navigate = useNavigate();
  let path = `/forum`; 
  const click = (name, brand, description, src, comments) => {
    // on click, switch page
    path = `/forum/post`; 
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
  let data = [post]
  const [posts, setPosts] = useState(data)
  const addPost = event => {
    console.log(posts)
    let get_posts = posts.slice() // apparently we need to use .slice() to update posts
    get_posts.push(post)
    setPosts(get_posts)
  };
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
              THIS WEEK
            </h3>
            {/* creating expanded cards https://www.tutorialspoint.com/how-to-create-expanding-cards-using-html-css-and-javascript */}
            {/* should be pulled from database */}
            {/* create card default file*/}
            {posts.map((post) =>{
              return(
              <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={click}>
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
                
          <ForumPost name={post.name} brand={post.brand} description={post.description} 
            src={post.src} comments={post.comments}/>;
              </div>);
            })}
            <Button variant="contained" onClick={addPost}>+</Button>
            {/* <a href={"/forum/new"}><Button variant="contained" onClick={addPost}>+</Button></a> */}
          </div>
      </div>
    </>
  );
};

export default Forum;
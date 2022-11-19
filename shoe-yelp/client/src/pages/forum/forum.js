import React from 'react';
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

// card element sourced from MaterialUI docs
const Forum = () => {
  let navigate = useNavigate();
  const click = () => {
    // on click, switch page
    let path = `/post`; 
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
          <div className="forum">
            <h3>
              THIS WEEK
            </h3>
            {/* creating expanded cards https://www.tutorialspoint.com/how-to-create-expanding-cards-using-html-css-and-javascript */}
            {/* should be pulled from database */}
            {/* create card default file*/}
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
                      Air Force 1
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {" Can never go wrong with a fresh pair of air forces. I would recommend purchasing the crease protector, true air force 1 heads know what I'm talking about."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
      </div>
    </>
  );
};

export default Forum;
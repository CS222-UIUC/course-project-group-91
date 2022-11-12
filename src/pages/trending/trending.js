import React from 'react';
import "./trending.css"
import img from "./airforce1.png"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const Trending = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
          <section class="header">
            <h1>TRENDING</h1>
          </section>
        </div>
          <div className="trending">
            <h3>
              LATEST
            </h3>
            {/* include cards */}
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
            <div className="card">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
  
export default Trending;
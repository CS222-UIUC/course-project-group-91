import React from 'react';
import "./trending.css"
import af_image from "./airforce1.png";
import ub_image from "./ultraboost22.jpg";
import am_image from "./airmax.jpg"
import aj_image from "./airjordan.jpg"
import pc_image from "./puma.jpg"
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
                    image = {af_image}
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
                    image = {ub_image}
                    alt="ultraboost 22"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ultra Boost 22
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      ADIDAS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {" I bought a pair of UltraBoost 22's for running, and all I can say is wow! These shoes make a 5 mile jog feel like nothing, so comfortable every step of the way."}
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
                    image = {am_image}
                    alt="air max 97"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Air Max 97
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {" This has got to be my favorite shoe that Nike has put out - ever. The wave design is so sleek, and the material is very unique, something you don't see very often. Let me know what you think!"}
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
                    image = {aj_image}
                    alt="air jordan 1 se"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Air Jordan 1 Low SE
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      NIKE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {" I don't know about all of you, but I am not a fan of this colorway for the Jordan 1 Low Dunks. I usually like the shoes in this series, but this one just rubs me the wrong way."}
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
                    image = {pc_image}
                    alt="puma x coca cola"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Puma X Coca-Cola Rider FV
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      PUMA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {" How do you guys feel about the new Puma x Coca-Cola collab? Interesting combo for sure, I'm excited to see what else Puma has cooking up."}
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
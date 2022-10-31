import React from 'react';
import "./forum.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// card element sourced from MaterialUI docs
const Forum = () => {
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
            <div className= 'post'>
              <Card sx={{ minWidth: 275, maxWidth: 325 }}>
                <CardContent>
                  {/* include image */}
                  <Typography variant="h5" component="div">
                    Air Force 1
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <b>NIKE</b>
                  </Typography>
                  <Typography variant="body2">
                    <b>John Doe</b>
                    <br></br>
                    {" Can never go wrong with a fresh pair of air forces. I would recommend purchasing the crease protector, true air force 1 heads know what I'm talking about."}
                  </Typography>
                  <CardActions>
                    {/*onclick do a small popup*/}
                    <Button size="small" > Read More </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          </div>
      </div>
    </>
  );
};

export default Forum;
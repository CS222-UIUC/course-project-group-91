import React from 'react';
import "./contact.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
const Contact = () => {
  return (
    <>
    <div className="body">
      <div className="banner">
        <section class="header">
          <h1>CONTACT</h1>
        </section>
      </div>
        <div id = "subheader">
          <h3>TELL US YOUR THOUGHTS</h3>
        </div>
      <div className="contactForm">
        <div id = "name">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div id = "email">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div id = "message">
          <FormControl sx={{ width: '50ch'}}>
            <OutlinedInput placeholder="Message" />
          </FormControl> 
        </div>
      </div>
    </div>
    </>
  );
};
  


export default Contact;
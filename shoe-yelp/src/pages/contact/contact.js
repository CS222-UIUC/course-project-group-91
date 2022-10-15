import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
const Contact = () => {
  return (
    <>
    <div className="body">
      <div className="title">
        <h1>
          {/* include a banner at the top */}
          CONTACT US
        </h1>
      </div>
      <div className="contactForm">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <FormControl sx={{ width: '50ch'}}>
          <OutlinedInput placeholder="Message" />
        </FormControl> 
      </div>
    </div>
    </>
  );
};
  
export default Contact;
import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
const Contact = () => {
  return (
    <>
    <div>
      <h1>
        {/* work on text centering for all components on the page*/}
        CONTACT US
      </h1>
    </div>
    <div>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <FormControl sx={{ width: '50ch'}}>
        <OutlinedInput placeholder="Message" />
      </FormControl>    </div>
    </>
  );
};
  
export default Contact;
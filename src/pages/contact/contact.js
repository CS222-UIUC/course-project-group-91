import React from 'react';
import "./contact.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

// pulled from https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/
// referenced https://bobbyhadz.com/blog/react-get-input-value and https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs

// not fully implemented
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    // cancels event if cancelable
    e.preventDefault()
    // on click, take in data from inputs, send message to database
    setFormStatus('Submitted!')
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.message.value);
  }
  return (
    <>
    <div className="body">
      <div className="banner">
        <section className="header">
          <h1>CONTACT</h1>
        </section>
      </div>
        <div id = "subheader">
          <h3>TELL US YOUR THOUGHTS</h3>
        </div>
      <div className="contactForm">
        <form onSubmit = {onSubmit}>
          <div id = "name">
            <TextField className = "outlined-basic" label="Name" variant="outlined" type = "text" name = "name" required/>
          </div>
          <div id = "email">
            {/* include test for valid email, give message if invalid email */}
            <TextField className = "outlined-basic" label="Email" variant="outlined" type = "text" name = "email" required/>
          </div>
          <div id = "message">
            <FormControl sx={{ width: '50ch'}}>
              <OutlinedInput placeholder="Message" type = "text" name = "message" required />
            </FormControl> 
          </div>
          <br></br>
          <Button variant="outlined" type = "submit" >{formStatus}</Button>
        </form>
      </div>
    </div>
    </>
  );
};
  


export default Contact;
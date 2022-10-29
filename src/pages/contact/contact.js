import React from 'react';
import "./contact.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitted!')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
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
        <form>
          <div id = "name">
            <TextField className = "outlined-basic" label="Name" variant="outlined" required/>
          </div>
          <div id = "email">
            <TextField className = "outlined-basic" label="Email" variant="outlined" required/>
          </div>
          <div id = "message">
            <FormControl sx={{ width: '50ch'}}>
              <OutlinedInput placeholder="Message" required />
            </FormControl> 
          </div>
          <br></br>
          <Button variant="outlined" onClick={onSubmit} >{formStatus}</Button>
        </form>
      </div>
    </div>
    </>
  );
};
  


export default Contact;
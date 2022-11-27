// CREATE POST TO BE ADDED TO DATABASE 

import React from 'react';
import "./newPost.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    // cancels event if cancelable
    e.preventDefault()
    // on click, take in data from inputs, send message to database
    setFormStatus('Submitted!')
    console.log(e.target.shoeName.value);
    console.log(e.target.brandName.value);
    console.log(e.target.description.value);
  }
  let navigate = useNavigate();
  let path = '/forum';
  function back() {
    navigate(path);
  }
  return (
    <>
    <div className="body">
      <div className="banner">
        <section className="header">
          <h1>CREATE A POST</h1>
        </section>
      </div>
        <div id = "subheader">
          <h3>NEW POST</h3>
        </div>
      <div className="postForm">
        <form onSubmit = {onSubmit}>
          <div id = "name">
            <TextField className = "outlined-basic" label="Shoe Name" variant="outlined" type = "text" name = "shoeName" required/>
          </div>
          <div id = "brand">
            <TextField className = "outlined-basic" label="Brand Name" variant="outlined" type = "text" name = "brandName" required/>
          </div>
          <div id = "description">
            <FormControl sx={{ width: '50ch'}}>
              <OutlinedInput placeholder="Description" type = "text" name = "description" required />
            </FormControl> 
          </div>
          <div id = "image">
            <FormControl sx={{ width: '50ch'}}>
                <input type="file" id="myFile" name="filename" required />
            </FormControl> 
          </div>
          <br></br>
          <Button variant="outlined" type = "submit" >{formStatus}</Button>
        </form>
        <br></br>
        <Button variant="contained" onClick={back}> {"GO BACK"}</Button>
      </div>
    </div>
    </>
  );
};
  


export default NewPost;
import React from "react";
import "./index.css";
import logo from "./shoelogo.png";
import { Nav, NavLink, NavMenu} 
    from "./NavbarElements";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <>
    <div id = "header">
      <div id = "search">
        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: '35ch'}}/>
        </div>
        <div className="profile" >
          <div className="login">
            <NavLink to="/login" activeStyle>
              <Button variant="contained"> Log In </Button>
            </NavLink>
          </div>
          <div className="signup">
            <NavLink to="/signup" activeStyle>
              <Button variant="outlined"> Sign Up </Button>
            </NavLink>
          </div>
        </div>
        <NavLink to="/home" activeStyle>
          <img src = {logo} alt = "shoe logo" id = "logo"/>
        </NavLink>
      </div>
      <hr></hr>
      <Nav className = "justify-content-center">
        <NavMenu>
          <NavLink to="/about" activeStyle>
            ABOUT
          </NavLink>
          <NavLink to="/forum" activeStyle>
            FORUM
          </NavLink>
          <NavLink to="/trending" activeStyle>
            TRENDING
          </NavLink>
          <NavLink to="/contact" activeStyle>
            CONTACT
          </NavLink>
        </NavMenu>
      </Nav>
      <hr></hr>
    </>
  );
};
  
export default Navbar;
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
      <a id = "home" href = "index.html">
        <img src = {logo} alt = "shoe logo" id = "logo"/>
      </a>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <div id = "profile">
        <Button variant="contained">Log In</Button>
        <Button variant="outlined">Sign Up</Button>
      </div>
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
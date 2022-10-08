import React from "react";
import logo from "./shoelogo.png";
import "./navbar.css"
import { Nav, NavLink, NavMenu} 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
    <div className="navbarTopContainer">
        <a id = "home" href = "/">
          <img src = {logo} alt = "shoe logo"/>
        </a>
        <a href = "login"> LOGIN </a>
        <a href = "signup"> SIGN UP </a>
    </div>
    <hr></hr>
    <Nav>
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
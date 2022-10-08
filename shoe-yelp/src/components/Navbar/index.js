import React from "react";
import logo from "./shoelogo.png";
import { Nav, NavLink, NavMenu} 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
    <a id = "home" href = "index.html">
    </a>
    <img src = {logo} alt = "shoe logo"/>
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
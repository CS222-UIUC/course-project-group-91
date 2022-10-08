import React, {useState} from 'react'
let HomePage = (currPage, setCurrPage) => {
    
    
    return (
        <div className="App">
        <div className = "header">
          <div className= "logoRow">
            <div className = "logo">
                <a id = "home" href = "index.html">
                    <img id= "logo_img" src='shoelogo.png'></img>
                </a>
            </div>
          </div>
          {/* <a href = "login.html"> LOGIN </a>
            <a href = "login.html"> SIGN UP </a> */}
          <div className = "search"><input></input></div>
          <div className = "menu">
            <hr></hr>
              <ul>
                  <li className = "pages">
                      <a className = "link" href = "about.html"> 
                          <h6 className = "label">ABOUT</h6>
                      </a>
                  </li>
                  <li className = "pages">
                      <a className = "link" href = "forum.html"> 
                          <h6 className = "label">FORUM</h6>
                      </a>
                  </li>
                  <li className = "pages">
                      <a className = "link" href = "trending.html"> 
                          <h6 className = "label">TRENDING</h6>
                      </a>
                  </li>
                  <li className = "pages">
                      <a className = "link" href = "contact.html"> 
                          <h6 className = "label">CONTACT</h6>
                      </a>
                  </li>
              </ul>
              <hr></hr>
          </div>
        </div>
      </div>
    );
}
export default HomePage;
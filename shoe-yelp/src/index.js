import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class = "header">
          <div class= "logoRow">
            <div class = "logo">
                <a id = "home" href = "index.html">
                    <img id= "logo_img" src='shoelogo.png'></img>
                </a>
            </div>
          </div>
          <a href = "login.html"> LOGIN </a>
            <a href = "login.html"> SIGN UP </a>
          <div class = "search"><input></input></div>
          <div class = "menu">
            <hr></hr>
              <ul>
                  <li class = "pages">
                      <a class = "link" href = "about.html"> 
                          <h6 class = "label">ABOUT</h6>
                      </a>
                  </li>
                  <li class = "pages">
                      <a class = "link" href = "forum.html"> 
                          <h6 class = "label">FORUM</h6>
                      </a>
                  </li>
                  <li class = "pages">
                      <a class = "link" href = "trending.html"> 
                          <h6 class = "label">TRENDING</h6>
                      </a>
                  </li>
                  <li class = "pages">
                      <a class = "link" href = "contact.html"> 
                          <h6 class = "label">CONTACT</h6>
                      </a>
                  </li>
              </ul>
              <hr></hr>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
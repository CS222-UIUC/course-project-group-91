<<<<<<< HEAD
import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import ReactDOM from 'react-dom'
import './index.css'
import LoginPage from "./loginPage/loginPage"
import HomePage from './homePage/homePage'
class App extends Component {
  render() {
    const localDomain = "http://localhost:3000/";
    /** 
     * BrowserRouter/Routes/Route is a custom component that works well with managing links
     * replaces the use of useState which makes our code much cleaner
    */
    return(
      <BrowserRouter>
        <Routes>
          {/** @TODO add more route(s) as pages develop*/}
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/login.html" element={<LoginPage></LoginPage>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
}
=======

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root')
);
>>>>>>> 853ee21b (reorganized files but lost styling, need to add back)



// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// class App extends Component {
//   render() {
//     return (
      // <div className="App">
      //   <div class = "header">
      //     <div class = "logo">
      //         <a id = "home" href = "index.html">
      //             <img id= "logo_img" src='shoelogo.png'></img>
      //         </a>
      //     </div>
      //     <div class = "search"><input></input></div>
      //     <div class = "menu">
      //       <hr></hr>
      //         <ul>
      //             <li class = "pages">
      //                 <a class = "link" href = "about.html"> 
      //                     <h6 class = "label">ABOUT</h6>
      //                 </a>
      //             </li>
      //             <li class = "pages">
      //                 <a class = "link" href = "forum.html"> 
      //                     <h6 class = "label">FORUM</h6>
      //                 </a>
      //             </li>
      //             <li class = "pages">
      //                 <a class = "link" href = "trending.html"> 
      //                     <h6 class = "label">TRENDING</h6>
      //                 </a>
      //             </li>
      //             <li class = "pages">
      //                 <a class = "link" href = "contact.html"> 
      //                     <h6 class = "label">CONTACT</h6>
      //                 </a>
      //             </li>
      //         </ul>
      //         <hr></hr>
      //     </div>
      //   </div>
      // </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
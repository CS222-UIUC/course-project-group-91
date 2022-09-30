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

ReactDOM.render(<App />, document.getElementById('root'))
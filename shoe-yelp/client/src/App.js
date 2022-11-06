import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Forum from './pages/forum/forum';
import Login from './pages/login/loginPage';
import SignUp from './pages/signup/signUpPage';
import Trending from './pages/trending/trending';  

class App extends Component {
    //initializes the default state
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    //callAPI() fetches the data from the server and stores the response on this.state.apiResponse
    callAPI() {
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    //executes callAPI() after the component mounts
    componentWillMount() {
        this.callAPI();
    }
    render() {
        return (
                <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/forum' element={<Forum/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/trending' element={<Trending/>} />
                </Routes>
                </Router>
            );
    }
}

export default App;
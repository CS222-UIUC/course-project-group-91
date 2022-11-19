import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Forum from './pages/forum/forum';
import Login from './pages/login/login';
import Trending from './pages/trending/trending';
import Signup from './pages/signup/signup';
import Post from './pages/postTemplate/post';
  
function App() {
return (
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/post' element={<Post/>} />
    </Routes>
    </Router>
);
}
  
export default App;
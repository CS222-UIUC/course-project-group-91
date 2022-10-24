import React from 'react';
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
  
function App() {
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
  
export default App;
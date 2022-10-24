import React, { Component, useState } from 'react'
import "./loginPage.css"
import TextField from "@material-ui/core/TextField"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="mainContainer">
            <div className="mainContainer">
                <h1> LOGIN IN </h1>
            </div>
            <div className="mainContainer">
                <div>
                    <TextField 
                    value={username}
                    label="Enter your Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div>
                    <TextField 
                    value={password}
                    label="Enter your password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <a href = "/"><button className="loginButton"> LOG IN </button></a>
                <a href="/signup"> <h6> Create Account </h6> </a>
            </div>
        </div>
    );
}
export default LoginPage;
import React, { Component, useState } from 'react'
import "./loginPage.css"
import TextField from "@material-ui/core/TextField"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
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
            </div>
        </div>
    );
}
export default LoginPage;
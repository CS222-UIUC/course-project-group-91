import React, { Component, useState } from 'react'
import "./loginPage.css"
import TextField from "@material-ui/core/TextField"
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return( 
        <div>
            <TextField 
            value={username}
            label="Enter your name"
            onChange={(e) => {
                setUsername(e.target.value);
            }}/>
            <TextField 
            value={password}
            label="Enter your password"
            onChange={(e) => {
                setPassword(e.target.value);
            }}/>
        </div>
    );
}
export default LoginPage;
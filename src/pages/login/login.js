import React, { useState } from 'react'
import "./login.css"
import TextField from "@material-ui/core/TextField"
import Button from '@mui/material/Button'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="body">
            <div className="title">
                <h1> LOG IN </h1>
            </div>
            <div className="loginForm">
                <div className="username">
                    <TextField 
                    value={username}
                    label="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div className="password">
                    <TextField 
                    value={password}
                    label="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <div className = "loginButton" >
                    <Button variant="contained" type = "submit" > Log In</Button>
                </div>
                <div className = "accButton">
                    <Button variant="outlined" href = "/signup" >Create Account</Button>
                </div>
            </div>
        </div>
    );
}
export default Login;
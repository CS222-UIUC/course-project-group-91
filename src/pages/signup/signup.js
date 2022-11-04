import React, { useState } from 'react'
import "./signup.css"
import TextField from "@material-ui/core/TextField"
import Button from '@mui/material/Button'


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="body">
            <div className="title">
                <h1> SIGN UP </h1>
            </div>
            <div className = "signupForm">
                <div className = "username" >
                    <TextField 
                    value={username}
                    label="Create Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </div>
                <div className = "password">
                    <TextField 
                    value={password}
                    label="Create Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <div className = "signupButton" >
                    <Button variant="contained" type = "submit" > Sign Up </Button>
                </div>
                <div className = "accButton">
                    <Button variant="outlined" href = "/login" >Already have an account? Log in</Button>
                </div>            </div>
        </div>
    );
}
export default SignUp;
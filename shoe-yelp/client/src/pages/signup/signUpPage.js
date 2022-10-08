import React, { Component, useState } from 'react'
import "./signUpPage.css"
import TextField from "@material-ui/core/TextField"
const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="mainContainer">
            <div className="mainContainer">
                <h1> SIGN UP </h1>
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
                <a href = "/"><button className='signUpButton'> Sign Up </button></a>
                <a href="/login"> <h6> Already have an account? Log in </h6> </a>
            </div>
        </div>
    );
}
export default SignUpPage;
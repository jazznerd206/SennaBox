import React, { useState } from 'react';
import './style.css';

function Login() {

    const [ form, setForm ] = useState('login')

    if (form === 'login') {
        return (
            <div className="login-wrapper">
                <div className="login-slide">
                    <label>Name:</label>
                    <input></input>
                    <label>Password:</label>
                    <input></input>
                    <button>Log In</button>
                </div>
                <div className="login-slide">
                    <button onClick={() => setForm('register')}>Sign Up</button>
                </div>
            </div>
        )
    }
    else if (form === 'register') {
        return (
            <div className="login-wrapper">
                <div className="login-slide">
                    <button onClick={() => setForm('login')}>Register</button>
                </div>
                <div className="login-slide">
                    <label>Name:</label>
                    <input></input>
                    <label>Password:</label>
                    <input></input>
                    <label> Retype Password:</label>
                    <input></input>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Login;

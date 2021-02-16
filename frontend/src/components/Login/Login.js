import React, { useState } from 'react';
import './style.css';

function Login() {

    const [ form, setForm ] = useState('login');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ checkPassword, setCheckPassword ] = useState('');

    const submitRegister = () => {
        console.log(`submit login for: ${name}, ${password}`)
    }

    if (form === 'login') {
        return (
            <div className="login-wrapper">
                <div className="login-slide">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button
                        onClick={() => submitRegister()}
                    >Log In</button>
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
                    <input
                        type="text"
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <label>Check Password:</label>
                    <input
                        type="checkPassword"
                        value={checkPassword}
                        id="checkPassword"
                        onChange={(e) => setCheckPassword(e.target.value)}
                    ></input>
                    <button
                        onClick={() => console.log(`submit register for: ${name}, ${password}, ${checkPassword}`)}
                    >Register</button>
                </div>
            </div>
        )
    }
}

export default Login;

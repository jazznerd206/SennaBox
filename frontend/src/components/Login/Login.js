import React, { useState } from 'react';
import API from '../../utils/API';
import './style.css';

function Login() {

    const [ form, setForm ] = useState('login');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ checkPassword, setCheckPassword ] = useState('');
    const [ msg, setMsg ] = useState('');

    const submitRegister = () => {
        const newUser = {
            email: email,
            username: name,
            password: password
        }
        console.log('newUser', newUser)
        const passwordCheck = (password, checkPassword) => {
            console.log('pwdchk ', password === checkPassword)
            return password === checkPassword;
        }
        const paramCheck = (email, name, password) => {
            if (!email || !name || !password) console.log('paramcheck ', false);
            if (!email || !name || !password) return false;
            return true;
        }
        if (paramCheck && passwordCheck) {
            console.log('ready to create user');
            API.registerUser(newUser)
                .then(response => {
                    setMsg('success', response)
                })
                .catch(error => {
                    setMsg('error ', error)
                })
            }
    }

    const submitLogin = () => {
        const user = {
            username: name,
            password: password
        };
        // console.log('user', user);
        const paramCheck = (name, password) => {
            if (!name || !password) console.log('paramcheck ', false);
            if (!name || !password) return false;
            return true;
        }
        if (paramCheck) {
            API.loginUser(user)
                .then(response => {
                    console.log('response', response);
                })
                .catch(error => {
                    console.log('error', error);
                })
        }

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
                        onClick={() => submitLogin()}
                    >Log In</button>
                    {msg !== "" ? 
                        null : <spam>{msg}</spam>
                    }
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
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
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
                        type="password"
                        value={checkPassword}
                        id="checkPassword"
                        onChange={(e) => setCheckPassword(e.target.value)}
                    ></input>
                    <button
                        onClick={() => submitRegister()}
                    >Register</button>
                </div>
            </div>
        )
    }
}

export default Login;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../utils/UserAtom.js'
import API from '../../utils/API';
import Cookies from 'js-cookie';
import './style.css';

function Login() {

    const history = useHistory();
    let [ currentUser, setUser ] = useRecoilState(userAtom);
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
        if (!paramCheck) {
            setMsg('All fields required')
        } else if (!passwordCheck) {
            setMsg('Passwords do not match')
        }
        else if (paramCheck && passwordCheck) {
            console.log('ready to create user');
            API.registerUser(newUser)
                .then(response => {
                    console.log('response', response)
                    setName('');
                    setEmail('');
                    setPassword('');
                    setCheckPassword('');
                    setMsg(response.message);
                    setForm('login');
                })
                .catch(error => {
                    console.log('error', error)
                })
            }
    }

    const submitLogin = () => {
        const user = {
            username: name,
            password: password
        };
        const paramCheck = (name, password) => {
            if (!name || !password) console.log('paramcheck ', false);
            if (!name || !password) return false;
            return true;
        }
        if (paramCheck) {
            let find = API.loginUser(user)
            console.log('find', find)
            find.then(response => {
                    if (response.status === 400) {
                        // console.log(response.message)
                        setMsg(response.message);
                    } else {
                        // console.log('this user exists and can log in', response);
                        Cookies.set('auth', `${response.user.id}:${response.authToken.token}`);
                        setName('');
                        setPassword('');
                        currentUser = response.user;
                        setUser(currentUser);
                        history.push('/dashboard');
                    }
                })
                .catch(error => {
                    console.log('error', error);
                    throw error;
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
                    {msg ? 
                        <span className="error-message">{msg}</span> : null
                    }
                </div>
                <div className="login-slide">
                    <button onClick={() => {
                        setForm('register');
                        setMsg('');    
                    }}>Sign Up</button>
                </div>
            </div>
        )
    }
    else if (form === 'register') {
        return (
            <div className="login-wrapper">
                <div className="login-slide">
                    <button onClick={() => {
                        setForm('login');
                        setMsg('');    
                    }}>Sign In</button>
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
                    <label>Retype Password:</label>
                    <input
                        type="password"
                        value={checkPassword}
                        id="checkPassword"
                        onChange={(e) => setCheckPassword(e.target.value)}
                    ></input>
                    <button
                        onClick={() => submitRegister()}
                    >Register</button>
                    {msg ? 
                        <span className="error-message">{msg}</span> : null
                    }
                </div>
            </div>
        )
    }
}

export default Login;

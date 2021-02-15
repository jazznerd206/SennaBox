import React from 'react';
import './style.css';
// import ActiveList from '../ActiveList/ActiveList';
import Login from '../Login/Login';

function Header() {
    return (
        <div className="header">
            <div className="title">
                <h1>SennaBox</h1>
                <Login />
            </div>
        </div>
    )
}

export default Header;

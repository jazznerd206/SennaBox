import React from 'react';
import './style.css';

function Nav() {

    return (
        <div>
            <header className="header">
                <a href="" className="logo">CSS Navigation</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav;
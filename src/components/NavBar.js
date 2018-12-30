import React from 'react';
import {  NavLink } from 'react-router-dom'
import './navbar.css';
import logo from './../resources/images/favicon.ico';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="banner">
                <img src={logo} alt="logo" className="logo" />
                <label>Company Name</label>
            </div>

            <div className="nav">
                <NavLink to="/Home" className="nav-item">Home</NavLink>
                <NavLink to="/About" className="nav-item">About</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
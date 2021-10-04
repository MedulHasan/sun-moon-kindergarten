import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLink.css'

const NavigationLink = () => {
    return (
        <div className="navigatiob-bar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About Us</NavLink>
            <NavLink className="nav-link" to="/service">Service</NavLink>
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </div>
    );
};

export default NavigationLink;
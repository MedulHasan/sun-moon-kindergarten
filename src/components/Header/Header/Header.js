import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Header.css'

const Header = () => {
    return (
        <div className="d-flex align-items-center justify-content-between header">
            <h3>
                Sun-Moon
            </h3>
            <NavigationLink />
        </div>
    );
};

export default Header;
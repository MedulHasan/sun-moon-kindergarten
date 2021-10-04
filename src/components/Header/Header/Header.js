import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Header.css'

const Header = () => {
    return (
        <div className="d-flex align-items-center justify-content-between header">
            <div>
                <h3 className="m-0">Sun-Moon</h3>
                <p className="logo-2">Kindergarten</p>
            </div>
            <NavigationLink />
        </div>
    );
};

export default Header;
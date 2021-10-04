import React from 'react';
import CoverPage from '../CoverPage/CoverPage';
import Quality from '../Quality/Quality';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <CoverPage coverText="About Us" services="about-us" />
            <Quality />
        </div>
    );
};

export default AboutUs;
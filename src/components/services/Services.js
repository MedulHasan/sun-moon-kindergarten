import React from 'react';
import Activities from '../Activities/Activities';
import CoverPage from '../CoverPage/CoverPage';
import PopularClasses from '../PopularClasses/PopularClasses';
import './Services.css'
import ServicesHome from './ServicesHome';

const Services = () => {
    return (
        <div>
            <CoverPage coverText="OUR SERVICES" services="services" />
            <ServicesHome />
            <Activities />
            <PopularClasses />
        </div>
    );
};

export default Services;
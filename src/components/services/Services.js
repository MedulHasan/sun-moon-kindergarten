import React from 'react';
import Activities from '../Activities/Activities';
import './Services.css'
import ServicesHome from './ServicesHome';

const Services = () => {
    return (
        <div>
            <div className="services">
                <h2 className="service-cover-text">OUR SERVICES</h2>
                <hr style={{ position: 'relative', height: '6px', color: '#fff', width: '80px', marginLeft: '180px', opacity: '1', borderRadius: '8px' }} />
            </div>
            <ServicesHome />
            <Activities />
        </div>
    );
};

export default Services;
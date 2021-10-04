import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ServicesHome.css'

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="d-flex services-home">
                {
                    services.map(service => (
                        <div key={service.key} className="single-service">
                            <img className="service-icon mb-4" src={service.icon} alt="" />
                            <h5 className="mb-4">{service.subject}</h5>
                            <p>{service.body}</p>
                            <Button style={{ backgroundColor: service.btnColor, border: 'none' }}>READ MORE</Button>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ServicesHome;
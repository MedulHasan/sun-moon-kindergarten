import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData/activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className="activitie">
            <div className="text-start mb-5">
                <h1>OUR ACTIVITIES</h1>
                <h6>OUR BEST SERVICES FOR YOUR KIDS</h6>
                <hr style={{ position: 'relative', height: '6px', color: '#EDBF47', width: '80px', marginLeft: '30px', opacity: '1', borderRadius: '8px' }} />
            </div>
            <div className="single-activitie">
                {
                    activities.map(activitie => (
                        <div key={activitie.key} className="d-flex">
                            <img className="activitie-logo me-4" src={activitie.img} alt="" />
                            <div>
                                <h3>{activitie.name}</h3>
                                <p>{activitie.details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Activities;
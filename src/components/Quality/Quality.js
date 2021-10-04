import React, { useEffect, useState } from 'react';
import './Quality.css'

const Quality = () => {
    const [qualitys, setQualitys] = useState([]);
    useEffect(() => {
        fetch('fakeData/quality.json')
            .then(res => res.json())
            .then(data => setQualitys(data))
    }, [])
    return (
        <div className="qualitys">
            {
                qualitys.map(quality => (
                    <div className="single-quality" key={quality.key}>
                        <h1><span style={{ color: quality.color }}>{quality.key}</span>. {quality.name}</h1>
                        <p>{quality.detail}</p>
                    </div>
                ))
            }
        </div >
    );
};

export default Quality;
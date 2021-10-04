import React from 'react';

const CoverPage = ({ coverText }) => {
    return (
        <div className="services" >
            <h2 className="service-cover-text">{coverText}</h2>
            <hr style={{ position: 'relative', height: '6px', color: '#fff', width: '80px', marginLeft: '180px', opacity: '1', borderRadius: '8px' }} />
        </div>
    );
};

export default CoverPage;
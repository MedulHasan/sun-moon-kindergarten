import React from 'react';

const TopicHeadline = ({ topic, color }) => {
    return (
        <div>
            <h1 className="our-service mt-3">{topic}</h1>
            <hr style={{ position: 'relative', height: '6px', color: color, width: '80px', marginLeft: '180px', opacity: '1', borderRadius: '8px' }} />
        </div>
    );
};

export default TopicHeadline;
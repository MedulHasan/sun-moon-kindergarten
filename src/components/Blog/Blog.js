import React from 'react';
import CoverPage from '../CoverPage/CoverPage';
import News from '../News/News';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <CoverPage coverText="BLOG MASONRY" services="blog" />
            <News />
        </div>
    );
};

export default Blog;
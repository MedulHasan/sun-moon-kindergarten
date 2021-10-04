import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('fakeData/blog.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <>
            <div className="blog-header">
                <h1>OUR BLOG</h1>
                <h6>FOLLOW OUR NEWS</h6>
            </div>
            <div className="all-news">
                {
                    news.map(n => (
                        <Card className="single-cart" id={n.key} key={n.key} style={{ backgroundColor: n.color }}>
                            <Card.Img variant="top" src={n.img} />
                            <Card.Body>
                                <Card.Title>{n.title}</Card.Title>
                                <Card.Text>
                                    {n.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    );
};

export default News;
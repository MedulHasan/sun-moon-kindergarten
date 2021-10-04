import React from 'react';
import Courses from '../Courses/Courses';
import ServicesHome from '../services/ServicesHome';
import TopicHeadline from '../TopicHeadline/TopicHeadline';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home d-flex align-items-center justify-content-evenly">
                <img className="cover-pic" src="image/cover-pic-3.png" alt="cover pic" />
                <div className="cover-text">
                    <h1>SCHOOL</h1>
                    <p>PRIMARY<span>edu</span></p>
                    <h1 className="edu">EDUCATIONAL</h1>
                    <p><span>for</span> AND <span>kind</span> OF TEACHING</p>
                </div>
            </div>
            <TopicHeadline topic="OUR SERVICES" color="#000" />
            <ServicesHome />
            <TopicHeadline topic="OUR COURSES" color="#000" />
            <Courses />
        </div>
    );
};

export default Home;
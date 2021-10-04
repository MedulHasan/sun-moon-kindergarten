import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fakeData/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <CardGroup className="courses">
                {
                    courses.map(course => (
                        <Card key={course.key} className="single-courses">
                            <Card.Img style={{ height: '250px' }} variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text style={{ lineHeight: '30px' }}>
                                    {course.body}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="p-2">
                                <div>
                                    <img className="instructor me-2" src={course.logo} alt="" />
                                    <small>{course.name}</small>
                                </div>
                                <Button className="ms-auto" style={{ backgroundColor: course.color, border: 'none' }}>READ MORE</Button>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    );
};

export default Courses;
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './PopularClassce.css'

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('fakeData/classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                <h1>Our Popular Classes</h1>
                <div className="d-flex align-items-center">
                    <hr style={{ position: 'relative', height: '2px', color: '#EDBF47', width: '50px', marginLeft: '700px', opacity: '1', borderRadius: '8px' }} />
                    <FontAwesomeIcon icon={faGraduationCap} style={{ marginLeft: '10px' }} />
                    <hr style={{ position: 'relative', height: '2px', color: '#EDBF47', width: '50px', marginLeft: '10px', opacity: '1', borderRadius: '8px' }} />
                </div>
            </div>
            <CardGroup className="popular-classes">
                {
                    classes.map(cls => (
                        <Card key={cls.key} className="me-5 border text-start">
                            <Card.Img variant="top" src={cls.img} style={{ height: '300px' }} />
                            <Card.Text className="bg-dark text-white w-50 class-time">
                                Class Time <br />
                                {cls.classTime}
                            </Card.Text>
                            <Card.Body>
                                <Card.Title style={{ color: '#B50DAF' }}>{cls.class}</Card.Title>
                                <Card.Text>
                                    {cls.detail}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card-footer text-center">
                                <small style={{ backgroundColor: '#A4F8A7', padding: '10px 20px' }}>Class Duration <br />{cls.duration}</small>
                                <small style={{ backgroundColor: '#FF00D7', padding: '10px 40px' }}>Age <br />{cls.age}</small>
                                <small style={{ backgroundColor: '#04AAFC', padding: '10px 20px' }}>Tution Fee <br />{cls.fee}</small>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    );
};

export default PopularClasses;
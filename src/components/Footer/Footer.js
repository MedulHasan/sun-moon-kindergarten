import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Button, FormControl } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top d-flex justify-content-around">
                <div>
                    <h6>PHONE SUPPORT</h6>
                    <p>24 HOURS A DAY</p>
                    <h5>+8801781222023</h5>
                </div>
                <div>
                    <h6>CONNECT WITH US</h6>
                    <p>SOCIAL MEDIA CHANNELS</p>
                    <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
                    <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                    <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                </div>
                <div className="text-start">
                    <h6>MESSAGE</h6>
                    <FormControl className="mb-2" placeholder="Email" type="email" />
                    <FormControl className="mb-2" placeholder="Message" />
                    <Button variant="info">Send</Button>
                </div>
            </div>
            <div className="footer-buttom d-flex justify-content-between align-items-center">
                <p>&copy; Copyrignt 2021 - Medul</p>
                <p>Creating by React js</p>
            </div>
        </div>
    );
};

export default Footer;
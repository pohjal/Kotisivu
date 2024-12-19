import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Navigate Section */}
                <div className="footer-section">
                    <h4>Navigate</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/apps">Apps</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                    >
                        LinkedIn
                    </a>
                    <Link to="/about" className="contact-button">
                        Contact Me!
                    </Link>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Leevi Pohja | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
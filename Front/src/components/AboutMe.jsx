import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <div className="about-me-text">
                    <h1 className="about-me-title">About Me</h1>
                    <p className="about-me-description">
                        Hello! I'm <strong>[Your Name]</strong>, a dedicated and passionate 
                        <strong>[Your Profession]</strong>. I thrive on solving complex problems, building impactful solutions, and 
                        continuously learning new technologies. With expertise in <strong>[Your Skills]</strong>, I have a proven track 
                        record of delivering high-quality projects that make a difference.
                    </p>
                    <p className="about-me-description">
                        Outside of work, you'll find me <strong>[Your Hobbies]</strong>, exploring new challenges, or working on 
                        personal development. I'm always excited to connect with like-minded individuals and collaborate on 
                        innovative projects.
                    </p>
                    <button className="about-me-button">Get in Touch</button>
                </div>
                <div className="about-me-image">
                    <img 
                        src="https://via.placeholder.com/400" 
                        alt="Your Profile" 
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Maitreya Buddhism</h2>
            <div className="about-content">
                <section className="about-section main-description">
                    <p className="highlight-text">
                        The Maitreya.co website is the home of all the channeled teachings 
                        of Maitreya through Margaret McElroy. This website shares the writings 
                        and videos from Maitreya, and it also continues as a hub to connect 
                        with his teachings through personal guidance and workshops.
                    </p>
                </section>

                <section className="about-section">
                    <h3>Our Mission</h3>
                    <p>
                        To spread awareness and understanding of Maitreya Buddhism, 
                        fostering peace, compassion, and wisdom in the modern world.
                    </p>
                </section>

                <section className="about-section">
                    <h3>History</h3>
                    <p>
                        The concept of Maitreya has been central to Buddhist thought 
                        for over two millennia, representing hope and future enlightenment.
                    </p>
                </section>

                <section className="about-section">
                    <h3>Contact Us</h3>
                    <p>
                        Email: info@maitreyabuddhism.org<br />
                        Phone: (555) 123-4567<br />
                        Address: 123 Buddha Path, Dharma City, DC 12345
                    </p>
                </section>

                <section className="about-section join-section">
                    <h3>Become Part of Our Community</h3>
                    <p>
                        Ready to start your spiritual journey with us? Join our community 
                        and discover the teachings of Maitreya Buddhism.
                    </p>
                    <Link to="/join" className="join-button">
                        Join Us Today
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default About; 
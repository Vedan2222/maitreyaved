import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making API calls
import './Join.css';

const Join = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'general',
        message: '',
        password: ''  // Add password field to form state
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send form data to backend
        try {
            const response = await axios.post('http://localhost:5005/api/users/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,  // Add password
                interests: [formData.interest], // Interests should be an array
            });
            console.log('Form submitted:', response.data);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                interest: 'general',
                message: '',
                password: '',  // Reset password
            });
            alert('Thank you for your interest! We will contact you soon.');
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('There was an error. Please try again later.');
        }
    };

    return (
        <div className="join-container">
            <div className="join-header">
                <h2>Join Our Community</h2>
                <p className="subtitle">Begin your journey with Maitreya Buddhism</p>
            </div>

            <div className="join-content">
                <div className="benefits-section">
                    <h3>Why Join Us?</h3>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <span className="benefit-icon">🧘</span>
                            <h4>Meditation Sessions</h4>
                            <p>Weekly guided meditation sessions with experienced practitioners</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">📚</span>
                            <h4>Sacred Teachings</h4>
                            <p>Access to ancient Buddhist texts and modern interpretations</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">👥</span>
                            <h4>Community Events</h4>
                            <p>Regular meetups, workshops, and spiritual retreats</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🎯</span>
                            <h4>Personal Growth</h4>
                            <p>Guidance for spiritual development and self-discovery</p>
                        </div>
                    </div>
                </div>

                <div className="join-form-section">
                    <h3>Register Your Interest</h3>
                    <form onSubmit={handleSubmit} className="join-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="interest">Area of Interest</label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="general">General Buddhism</option>
                                <option value="meditation">Meditation</option>
                                <option value="philosophy">Buddhist Philosophy</option>
                                <option value="retreats">Spiritual Retreats</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">Join Our Community</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;

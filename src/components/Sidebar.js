import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Related Topics</Link></li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h3>Key Concepts</h3>
                    <ul>
                        <li><a href="#buddhism">Buddhism</a></li>
                        <li><a href="#meditation">Meditation</a></li>
                        <li><a href="#teachings">Teachings</a></li>
                        <li><a href="#dharma">Dharma</a></li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#books">Books</a></li>
                        <li><a href="#videos">Videos</a></li>
                    </ul>
                </div>

                <div className="sidebar-section contact">
                    <h3>Contact</h3>
                    <p>Email: info@maitreyabuddhism.org</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

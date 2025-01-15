import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>Maitreya</h1>
                    <h2>Buddhism</h2>
                </div>
                
                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => handleNavigation('/')}>Home</Link></li>
                        <li><Link to="/about" onClick={() => handleNavigation('/about')}>About</Link></li>
                        <li><Link to="/topics" onClick={() => handleNavigation('/topics')}>Related Topics</Link></li>
                        <li><Link to="/join" onClick={() => handleNavigation('/join')}>Join us</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

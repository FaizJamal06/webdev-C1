import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    BlueWave Marine
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                    <div className={isOpen ? 'bar open' : 'bar'}></div>
                </div>

                <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
                    <li onClick={() => setIsOpen(false)}><a href="#home">Home</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#services">Services</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#experience">Experience</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#founder">Founder</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#contact" className="nav-cta">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

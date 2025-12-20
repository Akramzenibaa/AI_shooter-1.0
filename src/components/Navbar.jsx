import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">
                    <img src={logo} alt="Logo" width="32" height="32" />
                    <span>AI Shooter</span>
                </div>
                <div className="nav-links">
                    <button className="nav-btn" onClick={() => navigate('/app')}>
                        Launch App
                    </button>
                </div>
            </div>
        </nav>
    );
}

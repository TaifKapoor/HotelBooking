import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import './Nav.css';

const BookIcon = () => (
    <svg className="book-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Nav = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Blog', path: '/blogs' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsScrolled(true);
            return;
        } else {
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} alt="logo" className={`logo ${isScrolled ? 'logo-scrolled' : ''}`} />
            </Link>

            {/* Desktop Nav */}
            <div className="desktop-nav">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`nav-link ${isScrolled ? 'nav-link-scrolled' : ''}`}>
                        {link.name}
                        <div className={`nav-link-underline ${isScrolled ? 'nav-link-underline-scrolled' : ''}`}></div>
                    </a>
                ))}
                {/* <button className={`dashboard-button ${isScrolled ? 'dashboard-button-scrolled' : ''}`} onClick={() => navigate('/owner')}>
                    Dashboard
                </button> */}
            </div>

            {/* Desktop Right */}
            <div className="desktop-right">
                <img src={assets.searchIcon} alt="search" className={`search-icon ${isScrolled ? 'search-icon-scrolled' : ''}`} />
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button onClick={openSignIn} className="login-button">
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
                {user && (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                )}
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} className={`menu-icon ${isScrolled ? 'menu-icon-scrolled' : ''}`} />
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <button className="close-button" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="close-menu" className="close-icon" />
                </button>
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
                        {link.name}
                    </a>
                ))}
                {/* {user && (
                    <button className="mobile-dashboard-button" onClick={() => navigate('/owner')}>
                        Dashboard
                    </button>
                )} */}
                {!user && (
                    <button onClick={openSignIn} className="mobile-login-button">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Nav;
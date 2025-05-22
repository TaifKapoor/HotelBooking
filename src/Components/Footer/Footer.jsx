import React from 'react';
import { assets } from '../../assets/assets'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <div className="social-icons">
            <img src={assets.instagramIcon} alt="" className="icon"/>
            <img src={assets.facebookIcon} alt="" className="icon" />
            <img src={assets.twitterIcon} alt="" className="icon" />
            <img src={assets.linkendinIcon} alt="" className="icon" />
          </div>
        </div>

        <div className="footer-section">
          <p className="section-title">COMPANY</p>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="section-title">SUPPORT</p>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="section-title">STAY UPDATED</p>
          <p className="footer-text">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="newsletter">
            <input
              type="text"
              className="newsletter-input"
              placeholder="Your email"
            />
            <button className="newsletter-button">
              <img  src={assets.arrowIcon} className="arrow-icon"/>       
            </button>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="bottom-links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
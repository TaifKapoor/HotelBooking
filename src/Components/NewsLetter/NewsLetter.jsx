import React from 'react'
import { assets } from '../../assets/assets';
import Title from '../Title/Title.jsx';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter-box">
            <Title
                title="Stay Inspired"
                subTitle="Join our newsletter and be the first to discover new destination, exclusive offers, and travel inspiration"
            />
            <div className="input-container">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="email-input"
                />
                <button className="subscribe-button">
                    Subscribe
                    <img
                        src={assets.arrowIcon}
                        alt="Arrow Icon"
                        className="arrow-icon"
                    />
                </button>
            </div>
            <p className="privacy-text">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
            <div className="grid-container">
                <div className="content-left">
                    <h2 className="title-des">Subscribe to our newsletter</h2>
                    <p className="description-des">
                        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                        dolore.
                    </p>
                </div>
                <dl className="features-grid">
                    <div className="feature-item">
                        <div className="icon-container">
                            <i class="ri-terminal-window-line"></i>
                        </div>
                        <dt className="feature-title">Weekly articles</dt>
                        <dd className="feature-description">
                            Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                        </dd>
                    </div>
                    <div className="feature-item">
                        <div className="icon-container">
                            <i class="ri-hand"></i>
                        </div>
                        <dt className="feature-title">No spam</dt>
                        <dd className="feature-description">
                            Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                        </dd>
                    </div>
                </dl>
            </div>
            <div aria-hidden="true" className="background-decoration">
                <div className="decoration-shape" />
            </div>
        </div>
    )
}

export default NewsLetter

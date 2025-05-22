import React from 'react';
import './About.css';
import { assets, exploreData } from '../../assets/assets';

const About = () => {
    return (
        <>
            {/* Hotelexplore */}
            <div className="hotel-explore-section">
                <div className="hotel-explore-container">
                    <div className="hotel-explore-row">
                        <div className="hotel-explore-title">
                            <span>Explore</span>
                            <h2>The Hotel</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos, dicta iure rem voluptate odit fugit asperiores magnam expedita in.</p>
                        </div>
                        <div className="hotel-explore-wrapper">
                            <div className="hotel-explore-cards">
                                {exploreData.map((item, index) => (
                                    <div key={index} className="hotel-explore-card">
                                        <img src={item.image} alt={item.title} className="hotel-explore-card-image" />
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <a href="#">Read More</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our History */}
            <div className="our-history-wrapper">
                <div className="our-history-container">
                    <h1 className="our-history-title">Our History</h1>
                    <div className="timeline">
                        <div className="timeline-card">
                            <h2>2000 - 2010</h2>
                            <p>
                                A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.
                            </p>
                        </div>
                        <div className="timeline-card">
                            <h2>2011 - 2018</h2>
                            <p>
                                A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.
                            </p>
                        </div>
                        <div className="timeline-card">
                            <h2>2019 - 2024</h2>
                            <p>
                                A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
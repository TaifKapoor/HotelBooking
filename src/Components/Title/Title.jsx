import React from 'react';
import './Title.css';

const Title = ({ title, subTitle, align, font }) => {
    return (
        <div className={`title-container ${align === "left" ? "title-left" : ""}`}>
            <h1 className={`title ${font || "font-playfair"}`}>{title}</h1>
            <p className='subtitle'>{subTitle}</p>
        </div>
    );
};

export default Title;
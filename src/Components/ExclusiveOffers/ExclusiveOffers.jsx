import React from 'react';
import Title from '../Title/Title.jsx';
import { assets, exclusiveOffers } from '../../assets/assets';
import './ExclusiveOffers.css';

const ExclusiveOffers = () => {
  return (
    <div className="exclusive-offers">
      <div className="exclusive-offers-header">
        <Title align="left" title="Exclusive Offers" subTitle="Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories" />
        <button className="view-all-button">
          View All Offers
          <img src={assets.arrowIcon} className="arrow-icon" alt="" />
        </button>
      </div>

      <div className="offers-grid">
        {exclusiveOffers.map((item) => (
          <div key={item._id} className="offer-card" style={{ backgroundImage: `url(${item.image})` }}>
            <p className="offer-discount">{item.priceOff}% OFF</p>
            <div className="offer-content">
              <p className="offer-title">{item.title}</p>
              <p className="offer-description">{item.description}</p>
              <p className="offer-expiry">Expires {item.expiryDate}</p>
            </div>
            <button className="offer-button">
              View Offers
              <img className="offer-arrow-icon" src={assets.arrowIcon} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
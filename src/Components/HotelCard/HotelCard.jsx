import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './HotelCard.css';

const HotelCard = ({ room, index }) => {
    console.log(room);
    return (
        <Link
            to={'/rooms/' + room._id}
            onClick={() => window.scrollTo(0, 0)}
            key={room._id}
            className="hotel-card"
        >
            <img src={room.images[0]} alt="" />

            {index % 2 === 0 && (
                <p className="best-seller-badge">
                    Best Seller
                </p>
            )}

            <div className="card-content">
                <div className="hotel-info">
                    <p className="hotel-name">{room.hotel.name}</p>
                    <div className="rating">
                        <img src={assets.starIconFilled} alt="" /> 4.5
                    </div>
                </div>
                <div className="location">
                    <img src={assets.locationIcon} alt="" />
                    <span>{room.hotel.address}</span>
                </div>
                <div className="price-and-button">
                    <p>
                        <span className="price">${room.pricePerNight}</span> / night
                    </p>
                    <button className="book-now-button">Book Now</button>
                </div>
            </div>
        </Link>
    );
};

export default HotelCard;
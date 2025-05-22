import React from 'react';
import { roomsDummyData } from '../../assets/assets';
import HotelCard from "../HotelCard/HotelCard.jsx";
import Title from '../Title/Title.jsx';
import { useNavigate } from 'react-router-dom';
import './FeaturedDestination.css';

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="featured-destination">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled Luxury and unforgettable experiences."
      />

      <div className="cards-container">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms');
          window.scrollTo(0, 0);
        }}
        className="view-all-button"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
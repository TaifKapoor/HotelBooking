import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../../Components/StarRating'
import './AllRooms.css'

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="checkbox-label">{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="radio-container">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="radio-label">{label}</span>
    </label>
  )
}

const AllRoom = () => {
  const navigate = useNavigate()
  const [openFilters, setOpenFilters] = useState(false)

  const roomTypes = [
    "single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite"
  ]

  const PriceRange = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000"
  ]

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First"
  ]

  return (
    <div className="all-room-container">
      <div className="room-list">
        <div className="room-header">
          <h1 className="room-title">Hotel Rooms</h1>
          <p className="room-description">
            Take advantage of our limited time offers and special packages to enhance
            your stay and create unforgettable memories
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div key={room._id} className="room-item">
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`)
                window.scrollTo(0, 0)
              }}
              src={room.images[0]}
              alt=""
              title="View Room Details"
              className="room-image"
            />
            <div className="room-details">
              <p className="room-city">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`)
                  window.scrollTo(0, 0)
                }}
                className="room-name"
              >
                {room.hotel.name}
              </p>
              <div className="room-rating">
                <StarRating />
                <p className="rating-text">200+ reviews</p>
              </div>
              <div className="room-address">
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities */}
              <div className="room-amenities">
                {room.amenities.map((item, index) => (
                  <div key={index} className="amenity-item">
                    <img src={facilityIcons[item]} alt="" className="amenity-icon" />
                    <p className="amenity-text">{item}</p>
                  </div>
                ))}
              </div>
              {/* Room Price Per Night */}
              <p className="room-price">${room.pricePerNight}/ night</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="filters-container">
        <div className="filters-header">
          <p className="filters-title">FILTERS</p>
          <div className="filters-toggle">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="toggle-text-mobile"
            >
              {openFilters ? ' HIDE' : 'SHOW'}
            </span>
            <span className="toggle-text-desktop">CLEAR</span>
          </div>
        </div>

        <div className={`filters-content ${openFilters ? 'filters-content-open' : ''}`}>
          <div className="filter-section">
            <p className="filter-title">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="filter-section">
            <p className="filter-title">Price Range</p>
            {PriceRange.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>
          <div className="filter-section sort-section">
            <p className="filter-title">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllRoom
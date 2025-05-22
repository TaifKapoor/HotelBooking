import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../../assets/assets'
import StarRating from '../../Components/StarRating'
import './RoomDetails.css'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    if (room) {
      setRoom(room)
      setMainImage(room.images[0])
    }
  }, [id])

  return room ? (
    <div className="room-details-container">
      {/* Room Details */}
      <div className="room-header">
        <h1 className="room-title">
          {room.hotel.name} <span className="room-type">({room.roomType})</span>
        </h1>
        <p className="discount-badge">20% OFF</p>
      </div>

      {/* Room Rating */}
      <div className="room-rating">
        <StarRating/>
        <p className="rating-text">200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className="room-address">
        <img src={assets.locationIcon} alt="Location" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Image */}
      <div className="room-images">
        <div className="main-image-container">
          <img src={mainImage} className="main-image" alt="Main Room" />
        </div>
        <div className="thumbnail-grid">
          {room.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                src={image}
                key={index}
                className={`thumbnail ${mainImage === image ? 'thumbnail-active' : ''}`}
                alt={`Room ${index}`}
              />
            ))}
        </div>
      </div>

      {/* Room Highlight */}
      <div className="room-highlight">
        <div className="highlight-content">
          <h1 className="highlight-title">Experience Luxury Like Never Before</h1>
          <div className="amenities">
            {room.amenities.map((item, index) => (
              <div key={index} className="amenity-item">
                <img src={facilityIcons[item]} className="amenity-icon" alt={item} />
                <p className="amenity-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Room Price */}
        <p className="room-price">${room.pricePerNight} / night</p>
      </div>

      {/* CheckIn CheckOut Form */}
      <form className="booking-form">
        <div className="form-inputs">
          <div className="form-group">
            <label htmlFor="checkInDate" className="form-label">Check-In</label>
            <input
              type="date"
              id="checkInDate"
              className="form-input"
              required
            />
          </div>
          <div className="form-divider"></div>
          <div className="form-group">
            <label htmlFor="checkOutDate" className="form-label">Check-Out</label>
            <input
              type="date"
              id="checkOutDate"
              className="form-input"
              required
            />
          </div>
          <div className="form-divider"></div>
          <div className="form-group">
            <label htmlFor="guests" className="form-label"> accompaniment</label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="form-input guests-input"
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Check Availability
        </button>
      </form>

      {/* Common specification */}
      <div className="specifications">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="spec-item">
            <img src={spec.icon} className="spec-icon" alt={spec.title} />
            <div>
              <p className="spec-title">{spec.title}</p>
              <p className="spec-description">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus
          nostrum nesciunt facilis veritatis, provident corrupti cum. Nihil vero deserunt
          soluta labore a ipsa molestiae facere! Saepe, aliquid! Voluptatem facilis libero
          ut quia aliquam iure nulla vitae eaque nobis ducimus! Repudiandae quae ipsa
          molestiae, quisquam dolorum odio velit obcaecati asperiores!
        </p>
      </div>

      {/* Hosted by */}
      <div className="hosted-by">
        <div className="host-info">
          <img
            src={room.hotel.owner.image}
            className="host-image"
            alt="Host"
          />
          <div>
            <p className="host-name">Hosted by {room.hotel.name}</p>
            <div className="host-rating">
              <StarRating />
              <p className="rating-text">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="contact-button">Contact Now</button>
      </div>
    </div>
  ) : null
}

export default RoomDetails
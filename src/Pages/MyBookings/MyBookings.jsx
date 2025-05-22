import React, { useState } from 'react'
import Title from '../../Components/Title/Title.jsx'
import { assets, userBookingsDummyData } from '../../assets/assets'
import './MyBookings.css'

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div className="my-bookings-container">
      <Title/>

      <div className="bookings-list">
        <div className="bookings-header">
          <div className="header-item">Hotels</div>
          <div className="header-item">Date & Timings</div>
          <div className="header-item">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div key={booking._id} className="booking-item">
            {/* Hotel Details */}
            <div className="hotel-details">
              <img
                src={booking.room.images[0]}
                alt=""
                className="hotel-image"
              />
              <div className="hotel-info">
                <p className="hotel-name">
                  {booking.hotel.name}
                  <span className="room-type"> ({booking.room.roomType})</span>
                </p>
                <div className="hotel-address">
                  <img src={assets.locationIcon} alt="" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="hotel-guests">
                  <img src={assets.guestsIcon} alt="" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="hotel-total">Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & timings */}
            <div className="date-info">
              <div className="date-row">
                <p>Check-In:</p>
                <p className="date-text">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div className="date-row">
                <p>Check-Out:</p>
                <p className="date-text">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* Payment status */}
            <div className="payment-status">
              <div className="payment-indicator">
                <div
                  className={`status-dot ${booking.isPaid ? 'status-paid' : 'status-unpaid'}`}
                ></div>
                <p className={`status-text ${booking.isPaid ? 'status-paid' : 'status-unpaid'}`}>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="pay-button">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings
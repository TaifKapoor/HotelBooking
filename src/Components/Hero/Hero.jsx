import React from "react";
import { assets, cities } from "../../assets/assets";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <p className="hero-tag">The Ultimate Hotel Experience</p>

      <h1 className="hero-title">Discover Your Perfect Hateway Destination</h1>

      <p className="hero-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga, nesciunt molestias totam a ullam.
      </p>

      <form className="hero-form">
        <div className="form-group">
          <div className="form-label-group">
            <img src={assets.calenderIcon} alt="" className="form-icon" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="form-input"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city}  key={index} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <div className="form-label-group">
            <img src={assets.calenderIcon} alt="" className="form-icon" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input id="checkIn" type="date" className="form-input" />
        </div>

        <div className="form-group">
          <div className="form-label-group">
            <img src={assets.calenderIcon} alt="" className="form-icon" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input id="checkOut" type="date" className="form-input" />
        </div>

        <div className="form-group guests-group">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="form-input guests-input"
            placeholder="0"
          />
        </div>

        <button className="search-button">
          <img src={assets.searchIcon} alt="" className="search-icon" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default Hero;
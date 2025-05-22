import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Title from '../Title/Title.jsx';
import { assets, testimonials } from '../../assets/assets';
import './Testimonial.css';


const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
       <Title      title="What Our Clients Says"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled Luxury and unforgettable experiences."/>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            1399: { slidesPerView: 3 },
            1199: { slidesPerView: 2 },
            911: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="test-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-card-header">
                  <img src={testimonial.image} alt="User" className="testimonial-img" />
                  <div className="testimonial-info">
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <small className="testimonial-role">Client</small>
                  </div>
                  <img src={assets.quote} alt="Quote" className="testimonial-quote" />
                </div>
                <div className="testimonial-stars">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo vero quis alias quos cum animi iure quod fugiat perspiciatis non, iste illum qui? Id.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
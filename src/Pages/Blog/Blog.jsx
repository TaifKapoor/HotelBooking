import React from 'react'
import { assets, blogData } from '../../assets/assets';
import Title from '../../Components/Title/Title.jsx'
import './Blog.css';

const Blog = () => {
    return (
        <>
            {/* blog */}
            <div className="blog-section">
                <div className="container">
                    <Title
                        title="What Our Clients Says"
                        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled Luxury and unforgettable experiences."
                    />
                    <div className="blog-wrapper">
                        <div className="row">
                            {blogData.map((blog) => (
                                <div className="blog-column" key={blog.id}>
                                    <div className="blog-item">
                                        <div className="blog-image">
                                            <img src={blog.image} alt="" className="blog-img" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">{blog.date}</div>
                                            <h4 className="blog-title">{blog.title}</h4>
                                            <p className="blog-text">{blog.content}</p>
                                            <button className="blog-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

             {/* Guest */}
            <div className="guest">
                <div class="guest-section">
                    <div class="guest-content">
                        <h1>What Our Guests Say</h1>
                        <div class="guest-review">
                            <p>"Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable."</p>
                            <p class="author">- Chandni Rajput</p>
                        </div>
                        <div class="guest-review">
                            <p>Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.</p>
                            <p class="author">- Raja Sinha</p>
                        </div>
                        <div class="guest-review">
                            <p>"Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable."</p>
                            <p class="author">- Rani Singh</p>
                        </div>
                    </div>
                    <div className='guest-image'></div>
                </div>
            </div>
        </>
    )
}

export default Blog

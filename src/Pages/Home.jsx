import React from 'react'
import Hero from '../Components/Hero/Hero'
import FeaturedDestination from '../Components/FeaturedDestination/FeaturedDestination'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import Testimonial from '../Components/Testimonial/Testimonial'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home
